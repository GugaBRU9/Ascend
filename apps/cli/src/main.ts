import { pathToFileURL } from "node:url";

import { Command, CommanderError } from "commander";

import { executeInspectCatalog } from "./commands/inspect-catalog.js";
import { executeReplayLog } from "./commands/replay-log.js";
import { executeResolveTest } from "./commands/resolve-test.js";
import { executeValidateContent } from "./commands/validate-content.js";

export interface CliIo {
  stdout: (text: string) => void;
  stderr: (text: string) => void;
}

interface CliState {
  exitCode: number;
}

function defaultCliIo(): CliIo {
  return {
    stdout: (text) => process.stdout.write(text),
    stderr: (text) => process.stderr.write(text),
  };
}

function writeLine(write: (text: string) => void, text: string): void {
  write(text.endsWith("\n") ? text : `${text}\n`);
}

function parseInteger(value: string, label: string): number {
  const parsed = Number.parseInt(value, 10);
  if (Number.isNaN(parsed)) {
    throw new Error(`${label} must be a valid integer`);
  }

  return parsed;
}

function collectValues(value: string, previous: string[] = []): string[] {
  return [...previous, value];
}

async function handleExecution(
  execution: Promise<{ exitCode: number; text: string }>,
  io: CliIo,
  state: CliState,
): Promise<void> {
  const result = await execution;
  state.exitCode = result.exitCode;

  if (result.exitCode === 0) {
    writeLine(io.stdout, result.text);
    return;
  }

  writeLine(io.stderr, result.text);
}

export function buildCli(
  io: CliIo = defaultCliIo(),
  state: CliState = { exitCode: 0 },
): Command {
  const program = new Command();

  program
    .name("ascend-cli")
    .description("Adapter minimo para validacao mecanica de Ascend")
    .showHelpAfterError()
    .exitOverride();

  program
    .command("validate-content")
    .description("Valida o catalogo canonico e imprime issues agregadas")
    .option("--catalog-dir <path>", "Diretorio alternativo para o catalogo")
    .action(async (options: { catalogDir?: string }) =>
      handleExecution(executeValidateContent(options), io, state),
    );

  program
    .command("resolve-test")
    .description("Resolve um teste canonico e emite o replay JSON")
    .requiredOption("--seed <number>", "Seed numerica", (value) => parseInteger(value, "seed"))
    .requiredOption(
      "--difficulty <number>",
      "Nivel de dificuldade",
      (value) => parseInteger(value, "difficulty"),
    )
    .option("--mode <mode>", "Modo de rolagem: normal, advantage ou disadvantage")
    .option(
      "--modifier <source=value>",
      "Modificador no formato source=value",
      collectValues,
      [],
    )
    .option("--opposed", "Marca o teste como oposto")
    .option(
      "--favor-current-state-on-tie",
      "Empates em teste oposto favorecem o estado atual",
    )
    .action(
      async (options: {
        seed: number;
        difficulty: number;
        mode?: "normal" | "advantage" | "disadvantage";
        modifier: string[];
        opposed?: boolean;
        favorCurrentStateOnTie?: boolean;
      }) => handleExecution(executeResolveTest(options), io, state),
    );

  program
    .command("replay-log")
    .description("Reexecuta um replay JSON canonico e imprime resumo humano")
    .argument("<file>", "Arquivo JSON de replay")
    .action(async (file: string) => handleExecution(executeReplayLog({ file }), io, state));

  program
    .command("inspect-catalog")
    .description("Mostra um resumo carregavel do catalogo canonico")
    .option("--catalog-dir <path>", "Diretorio alternativo para o catalogo")
    .action(async (options: { catalogDir?: string }) =>
      handleExecution(executeInspectCatalog(options), io, state),
    );

  return program;
}

export async function runCli(
  argv = process.argv,
  io: CliIo = defaultCliIo(),
): Promise<number> {
  const state: CliState = { exitCode: 0 };
  const program = buildCli(io, state);

  try {
    await program.parseAsync(argv);
    return state.exitCode;
  } catch (error) {
    if (error instanceof CommanderError) {
      return error.exitCode;
    }

    const message = error instanceof Error ? error.message : String(error);
    writeLine(io.stderr, message);
    return 1;
  }
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const exitCode = await runCli(process.argv);
  if (exitCode !== 0) {
    process.exitCode = exitCode;
  }
}
