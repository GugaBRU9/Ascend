import {
  createResolveTestReplayEnvelope,
  serializeResolveTestReplay,
  type ResolveTestCommand,
  type ResolveTestReplayEnvelope,
  type ResolveTestResult,
  resolveTest,
} from "@ascend/core";

export interface ResolveTestRun {
  command: ResolveTestCommand;
  result: ResolveTestResult;
  replay: ResolveTestReplayEnvelope;
}

export function runResolveTestCommand(command: ResolveTestCommand): ResolveTestRun {
  const result = resolveTest(command);
  const replay = createResolveTestReplayEnvelope(command, result);

  return {
    command: replay.command,
    result,
    replay,
  };
}

export function rerunResolveTestReplay(
  envelope: ResolveTestReplayEnvelope,
): ResolveTestRun & { matches: boolean } {
  const rerun = runResolveTestCommand(envelope.command);
  const matches =
    serializeResolveTestReplay(rerun.replay) === serializeResolveTestReplay(envelope);

  return {
    ...rerun,
    matches,
  };
}
