import type { DomainEvent } from "../domain/events.js";
import type { DegreeOfSuccess } from "../tests/degree-of-success.js";
import type {
  ResolveTestCommand,
  ResolveTestResult,
  RollMode,
  TestModifier,
} from "../tests/resolve-test.js";

export const resolveTestReplayVersion = 1;

export interface ResolveTestReplayResult {
  total: number;
  natural: number;
  degree: DegreeOfSuccess;
  passed: boolean;
  difficulty: number;
  margin: number;
  rollMode: RollMode;
  modifierTotal: number;
}

export interface ResolveTestReplayEnvelope {
  version: typeof resolveTestReplayVersion;
  seed: number;
  command: ResolveTestCommand;
  rolls: number[];
  modifierBreakdown: TestModifier[];
  result: ResolveTestReplayResult;
  events: DomainEvent<string, Record<string, unknown>>[];
}

export function createResolveTestReplayEnvelope(
  command: ResolveTestCommand,
  result: ResolveTestResult,
): ResolveTestReplayEnvelope {
  const normalizedCommand: ResolveTestCommand = {
    seed: command.seed,
    difficulty: command.difficulty,
    mode: result.rollMode,
    modifiers: result.modifierBreakdown,
    ...(command.opposed !== undefined ? { opposed: command.opposed } : {}),
    ...(command.favorCurrentStateOnTie !== undefined
      ? { favorCurrentStateOnTie: command.favorCurrentStateOnTie }
      : {}),
  };

  return {
    version: resolveTestReplayVersion,
    seed: command.seed,
    command: normalizedCommand,
    rolls: result.rolls,
    modifierBreakdown: result.modifierBreakdown,
    result: {
      total: result.total,
      natural: result.natural,
      degree: result.degree,
      passed: result.passed,
      difficulty: result.difficulty,
      margin: result.margin,
      rollMode: result.rollMode,
      modifierTotal: result.modifierTotal,
    },
    events: result.events,
  };
}
