import { describe, expect, it } from "vitest";

import type { D20Roller } from "../rng/prng.js";
import { resolveDegree } from "../tests/degree-of-success.js";
import { resolveTest } from "../tests/resolve-test.js";

function createRoller(...rolls: number[]): D20Roller {
  let index = 0;

  return {
    d20() {
      const value = rolls[index];
      index += 1;
      if (typeof value !== "number") {
        throw new Error("No more mocked d20 rolls available");
      }

      return value;
    },
  };
}

describe("resolveTest", () => {
  it("uses the highest roll when advantage is active", () => {
    const result = resolveTest(
      {
        seed: 1,
        difficulty: 12,
        mode: "advantage",
        modifiers: [{ source: "atributo", value: 2 }],
      },
      createRoller(4, 17),
    );

    expect(result.natural).toBe(17);
    expect(result.rolls).toEqual([4, 17]);
    expect(result.total).toBe(19);
  });

  it("uses the lowest roll when disadvantage is active", () => {
    const result = resolveTest(
      {
        seed: 1,
        difficulty: 12,
        mode: "disadvantage",
        modifiers: [{ source: "atributo", value: 2 }],
      },
      createRoller(4, 17),
    );

    expect(result.natural).toBe(4);
    expect(result.rolls).toEqual([4, 17]);
    expect(result.total).toBe(6);
  });

  it("promotes the degree on natural 20", () => {
    const result = resolveTest(
      {
        seed: 2,
        difficulty: 24,
        modifiers: [{ source: "treinamento", value: 0 }],
      },
      createRoller(20),
    );

    expect(result.degree).toBe("success");
  });

  it("demotes the degree on natural 1", () => {
    const result = resolveTest(
      {
        seed: 3,
        difficulty: 1,
        modifiers: [{ source: "treinamento", value: 0 }],
      },
      createRoller(1),
    );

    expect(result.degree).toBe("failure");
  });

  it("favors the current scene state on opposed ties when configured", () => {
    expect(
      resolveDegree({
        natural: 10,
        total: 15,
        difficulty: 15,
        opposed: true,
        favorCurrentStateOnTie: true,
      }),
    ).toBe("failure");
  });
});

