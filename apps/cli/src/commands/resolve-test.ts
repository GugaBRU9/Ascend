import {
  serializeResolveTestReplay,
  type ResolveTestCommand,
  type RollMode,
  type TestModifier,
} from "@ascend/core";
import { runResolveTestCommand } from "@ascend/sim";

export interface ResolveTestCliOptions {
  seed: number;
  difficulty: number;
  mode?: RollMode;
  modifier?: string[];
  opposed?: boolean;
  favorCurrentStateOnTie?: boolean;
}

export function parseModifierToken(token: string): TestModifier {
  const separatorIndex = token.lastIndexOf("=");
  if (separatorIndex <= 0 || separatorIndex === token.length - 1) {
    throw new Error(`Modifier '${token}' must use the format source=value`);
  }

  const source = token.slice(0, separatorIndex).trim();
  const rawValue = token.slice(separatorIndex + 1).trim();
  const value = Number.parseInt(rawValue, 10);

  if (!source) {
    throw new Error(`Modifier '${token}' must define a source`);
  }

  if (Number.isNaN(value)) {
    throw new Error(`Modifier '${token}' must define a numeric value`);
  }

  return { source, value };
}

export function buildResolveTestCommand(options: ResolveTestCliOptions): ResolveTestCommand {
  const modifiers = (options.modifier ?? []).map(parseModifierToken);

  return {
    seed: options.seed,
    difficulty: options.difficulty,
    ...(options.mode ? { mode: options.mode } : {}),
    ...(modifiers.length > 0 ? { modifiers } : {}),
    ...(options.opposed ? { opposed: true } : {}),
    ...(options.favorCurrentStateOnTie ? { favorCurrentStateOnTie: true } : {}),
  };
}

export async function executeResolveTest(options: ResolveTestCliOptions) {
  const run = runResolveTestCommand(buildResolveTestCommand(options));

  return {
    exitCode: 0,
    text: serializeResolveTestReplay(run.replay),
  };
}
