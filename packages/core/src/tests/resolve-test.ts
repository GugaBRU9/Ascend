import type { DomainEvent } from "../domain/events.js";
import { createSeededPrng, type D20Roller } from "../rng/prng.js";
import { resolveDegree, type DegreeOfSuccess } from "./degree-of-success.js";

export type RollMode = "normal" | "advantage" | "disadvantage";

export interface TestModifier {
  source: string;
  value: number;
}

export interface ResolveTestCommand {
  seed: number;
  difficulty: number;
  mode?: RollMode;
  modifiers?: TestModifier[];
  opposed?: boolean;
  favorCurrentStateOnTie?: boolean;
}

export interface ResolveTestResult {
  total: number;
  natural: number;
  degree: DegreeOfSuccess;
  passed: boolean;
  difficulty: number;
  margin: number;
  rollMode: RollMode;
  rolls: number[];
  modifierBreakdown: TestModifier[];
  modifierTotal: number;
  events: DomainEvent<"test.resolved", Record<string, unknown>>[];
}

export interface RollTrace {
  chosen: number;
  rolls: number[];
  mode: RollMode;
}

export function rollD20(mode: RollMode, roller: D20Roller): RollTrace {
  const first = roller.d20();
  if (mode === "normal") {
    return {
      chosen: first,
      rolls: [first],
      mode,
    };
  }

  const second = roller.d20();
  return {
    chosen: mode === "advantage" ? Math.max(first, second) : Math.min(first, second),
    rolls: [first, second],
    mode,
  };
}

export function resolveTest(
  command: ResolveTestCommand,
  roller: D20Roller = createSeededPrng(command.seed),
): ResolveTestResult {
  const mode = command.mode ?? "normal";
  const modifiers = command.modifiers ?? [];
  const modifierTotal = modifiers.reduce((total, modifier) => total + modifier.value, 0);
  const roll = rollD20(mode, roller);
  const total = roll.chosen + modifierTotal;
  const degree = resolveDegree({
    natural: roll.chosen,
    total,
    difficulty: command.difficulty,
    ...(command.opposed !== undefined ? { opposed: command.opposed } : {}),
    ...(command.favorCurrentStateOnTie !== undefined
      ? { favorCurrentStateOnTie: command.favorCurrentStateOnTie }
      : {}),
  });
  const margin = total - command.difficulty;

  const events: DomainEvent<"test.resolved", Record<string, unknown>>[] = [
    {
      type: "test.resolved",
      sequence: 1,
      source: "core.resolveTest",
      payload: {
        seed: command.seed,
        mode,
        rolls: roll.rolls,
        natural: roll.chosen,
        difficulty: command.difficulty,
        modifierBreakdown: modifiers,
        modifierTotal,
        total,
        margin,
        degree,
      },
    },
  ];

  return {
    total,
    natural: roll.chosen,
    degree,
    passed: degree === "success" || degree === "strong-success",
    difficulty: command.difficulty,
    margin,
    rollMode: mode,
    rolls: roll.rolls,
    modifierBreakdown: modifiers,
    modifierTotal,
    events,
  };
}
