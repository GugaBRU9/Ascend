import type { ResolveTestReplayEnvelope } from "@ascend/core";

function formatSignedNumber(value: number): string {
  return value >= 0 ? `+${value}` : `${value}`;
}

function formatDegreeLabel(
  degree: ResolveTestReplayEnvelope["result"]["degree"],
): string {
  switch (degree) {
    case "strong-success":
      return "sucesso forte";
    case "success":
      return "sucesso";
    case "failure":
      return "falha";
    case "severe-failure":
      return "falha grave";
  }
}

export function formatReplaySummary(
  replay: ResolveTestReplayEnvelope,
  matches: boolean,
): string {
  const modifierLines =
    replay.modifierBreakdown.length > 0
      ? replay.modifierBreakdown.map(
          (modifier) => `- ${modifier.source}: ${formatSignedNumber(modifier.value)}`,
        )
      : ["- none (+0)"];

  return [
    "replay summary",
    `seed: ${replay.seed}`,
    `modo: ${replay.result.rollMode}`,
    `rolagens: ${replay.rolls.join(", ")}`,
    `nd: ${replay.result.difficulty}`,
    `total: ${replay.result.total}`,
    `grau: ${formatDegreeLabel(replay.result.degree)}`,
    `resultado: ${replay.result.passed ? "passou" : "falhou"}`,
    `eventos: ${replay.events.length}`,
    `replay consistente: ${matches ? "sim" : "nao"}`,
    "modifier breakdown:",
    ...modifierLines,
  ].join("\n");
}
