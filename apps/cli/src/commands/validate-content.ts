import { loadCanonicalCatalog } from "@ascend/content";

export interface ValidateContentOptions {
  catalogDir?: string;
}

function formatIssueLine(issue: {
  file: string;
  entryId: string;
  field: string;
  severity: string;
  message: string;
}): string {
  return `${issue.file} :: ${issue.entryId} :: ${issue.field} :: ${issue.severity} :: ${issue.message}`;
}

export async function executeValidateContent(options: ValidateContentOptions) {
  const result = await loadCanonicalCatalog(options.catalogDir);

  if (!result.ok) {
    return {
      exitCode: 1,
      text: [
        `catalogo invalido: ${result.issues.length} issue(s)`,
        ...result.issues.map(formatIssueLine),
      ].join("\n"),
    };
  }

  return {
    exitCode: 0,
    text: [
      "catalogo valido",
      `origins: ${result.catalog.origins.length}`,
      `trails: ${result.catalog.trails.length}`,
      `skills: ${result.catalog.skills.length}`,
      `equipment: ${result.catalog.equipment.length}`,
      `enemies: ${result.catalog.enemies.length}`,
      `starterAdventure: ${result.catalog.starterAdventure?.id ?? "missing"}`,
    ].join("\n"),
  };
}
