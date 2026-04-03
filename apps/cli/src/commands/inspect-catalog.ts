import { loadCanonicalCatalog } from "@ascend/content";

export interface InspectCatalogOptions {
  catalogDir?: string;
}

export async function executeInspectCatalog(options: InspectCatalogOptions) {
  const result = await loadCanonicalCatalog(options.catalogDir);

  if (!result.ok) {
    return {
      exitCode: 1,
      text: `catalogo invalido: ${result.issues.length} issue(s)`,
    };
  }

  return {
    exitCode: 0,
    text: [
      "catalog summary",
      `origins: ${result.catalog.origins.length}`,
      `trails: ${result.catalog.trails.length}`,
      `skills: ${result.catalog.skills.length}`,
      `equipment: ${result.catalog.equipment.length}`,
      `enemies: ${result.catalog.enemies.length}`,
      `starter adventure: ${result.catalog.starterAdventure?.name ?? "missing"}`,
    ].join("\n"),
  };
}
