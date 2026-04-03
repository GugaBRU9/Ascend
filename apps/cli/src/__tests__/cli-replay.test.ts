import { mkdtemp, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { serializeResolveTestReplay } from "@ascend/core";
import { runResolveTestCommand } from "@ascend/sim";

import { runCli } from "../main.js";

describe("ascend-cli replay-log", () => {
  it("prints seed and final result fields from a replay artifact", async () => {
    const tempRoot = await mkdtemp(path.join(os.tmpdir(), "ascend-cli-replay-"));
    const replayFile = path.join(tempRoot, "replay.json");
    const run = runResolveTestCommand({
      seed: 77,
      difficulty: 16,
      mode: "advantage",
      modifiers: [
        { source: "atributo", value: 3 },
        { source: "treinamento", value: 2 },
      ],
    });

    await writeFile(replayFile, serializeResolveTestReplay(run.replay), "utf8");

    const stdout: string[] = [];
    const stderr: string[] = [];
    const exitCode = await runCli(
      ["node", "ascend-cli", "replay-log", replayFile],
      {
        stdout: (text) => stdout.push(text),
        stderr: (text) => stderr.push(text),
      },
    );

    const output = stdout.join("");

    expect(exitCode).toBe(0);
    expect(output).toContain("seed: 77");
    expect(output).toContain("grau: sucesso");
    expect(output).toContain("resultado: passou");
    expect(output).toContain("eventos: 1");
    expect(stderr.join("")).toBe("");
  });
});
