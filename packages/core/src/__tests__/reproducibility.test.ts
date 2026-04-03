import fc from "fast-check";
import { describe, expect, it } from "vitest";

import { resolveTest } from "../tests/resolve-test.js";

describe("resolveTest reproducibility", () => {
  it("produces the same result for the same seed and command", () => {
    const command = {
      seed: 90210,
      difficulty: 16,
      mode: "advantage" as const,
      modifiers: [
        { source: "atributo", value: 3 },
        { source: "treinamento", value: 2 },
        { source: "ajuda", value: 2 },
      ],
    };

    const first = resolveTest(command);
    const second = resolveTest(command);

    expect(second).toEqual(first);
  });

  it("keeps reproducibility across arbitrary seeds and modifier lists", () => {
    fc.assert(
      fc.property(
        fc.integer({ min: 1, max: 100000 }),
        fc.integer({ min: 8, max: 28 }),
        fc.constantFrom<"normal" | "advantage" | "disadvantage">(
          "normal",
          "advantage",
          "disadvantage",
        ),
        fc.array(
          fc.record({
            source: fc.string({ minLength: 1, maxLength: 12 }),
            value: fc.integer({ min: -5, max: 10 }),
          }),
          { maxLength: 4 },
        ),
        (seed, difficulty, mode, modifiers) => {
          const command = {
            seed,
            difficulty,
            mode,
            modifiers,
          };

          expect(resolveTest(command)).toEqual(resolveTest(command));
        },
      ),
    );
  });
});
