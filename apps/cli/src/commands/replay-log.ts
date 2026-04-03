import { readFile } from "node:fs/promises";

import { deserializeResolveTestReplay } from "@ascend/core";
import { rerunResolveTestReplay } from "@ascend/sim";

import { formatReplaySummary } from "../formatters/replay-summary.js";

export interface ReplayLogOptions {
  file: string;
}

export async function executeReplayLog(options: ReplayLogOptions) {
  const source = await readFile(options.file, "utf8");
  const replay = deserializeResolveTestReplay(source);
  const rerun = rerunResolveTestReplay(replay);

  return {
    exitCode: rerun.matches ? 0 : 1,
    text: formatReplaySummary(replay, rerun.matches),
  };
}
