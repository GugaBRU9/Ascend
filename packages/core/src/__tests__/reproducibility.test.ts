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
});
