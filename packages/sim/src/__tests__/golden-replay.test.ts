import { describe, expect, it } from "vitest";

import { serializeResolveTestReplay } from "@ascend/core";

import {
  rerunResolveTestReplay,
  runResolveTestCommand,
} from "../harness/resolve-test-runner.js";

const goldenCommand = {
  seed: 77,
  difficulty: 16,
  mode: "advantage" as const,
  modifiers: [
    { source: "atributo", value: 3 },
    { source: "treinamento", value: 2 },
  ],
};

const goldenReplayJson = `{
  "version": 1,
  "seed": 77,
  "command": {
    "seed": 77,
    "difficulty": 16,
    "mode": "advantage",
    "modifiers": [
      {
        "source": "atributo",
        "value": 3
      },
      {
        "source": "treinamento",
        "value": 2
      }
    ]
  },
  "rolls": [
    11,
    1
  ],
  "modifierBreakdown": [
    {
      "source": "atributo",
      "value": 3
    },
    {
      "source": "treinamento",
      "value": 2
    }
  ],
  "result": {
    "total": 16,
    "natural": 11,
    "degree": "success",
    "passed": true,
    "difficulty": 16,
    "margin": 0,
    "rollMode": "advantage",
    "modifierTotal": 5
  },
  "events": [
    {
      "type": "test.resolved",
      "sequence": 1,
      "source": "core.resolveTest",
      "payload": {
        "seed": 77,
        "mode": "advantage",
        "rolls": [
          11,
          1
        ],
        "natural": 11,
        "difficulty": 16,
        "modifierBreakdown": [
          {
            "source": "atributo",
            "value": 3
          },
          {
            "source": "treinamento",
            "value": 2
          }
        ],
        "modifierTotal": 5,
        "total": 16,
        "margin": 0,
        "degree": "success"
      }
    }
  ]
}`;

describe("resolve-test replay runner", () => {
  it("emits stable replay JSON for a fixed seed", () => {
    const run = runResolveTestCommand(goldenCommand);

    expect(serializeResolveTestReplay(run.replay)).toBe(goldenReplayJson);
    expect(rerunResolveTestReplay(run.replay).matches).toBe(true);
  });
});
