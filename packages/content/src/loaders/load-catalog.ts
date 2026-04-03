import { readFile } from "node:fs/promises";
import path from "node:path";

import { parse } from "yaml";
import type { ZodType } from "zod";

import type {
  EnemyDefinition,
  EquipmentDefinition,
  OriginDefinition,
  SkillDefinition,
  StarterAdventureDefinition,
  TrailDefinition,
} from "../catalog-types.js";
import {
  catalogFileNames,
  catalogFileSchemas,
  type CatalogFileKey,
} from "../schema/catalog-schemas.js";
import { collectReferenceIssues } from "./reference-checks.js";
import {
  createValidationIssue,
  type ValidationIssue,
  zodIssuesToValidationIssues,
} from "../validation/validation-issue.js";

export interface LoadedCatalog {
  origins: OriginDefinition[];
  trails: TrailDefinition[];
  skills: SkillDefinition[];
  equipment: EquipmentDefinition[];
  enemies: EnemyDefinition[];
  starterAdventure: StarterAdventureDefinition | null;
}

export interface CatalogLoadResult {
  catalog: LoadedCatalog;
  issues: ValidationIssue[];
  ok: boolean;
}

function emptyCatalog(): LoadedCatalog {
  return {
    origins: [],
    trails: [],
    skills: [],
    equipment: [],
    enemies: [],
    starterAdventure: null,
  };
}

function readCatalogEntryValue(
  key: CatalogFileKey,
  parsedData: Record<string, unknown>,
): unknown {
  if (key === "starterAdventure") {
    return parsedData.starterAdventure;
  }

  return parsedData[key];
}

function createDuplicateIdIssues(
  file: string,
  entries: Array<{ id: string }>,
): ValidationIssue[] {
  const seen = new Set<string>();
  const issues: ValidationIssue[] = [];

  for (const entry of entries) {
    if (seen.has(entry.id)) {
      issues.push(
        createValidationIssue(file, entry.id, "id", `Duplicate id '${entry.id}' found in file`),
      );
      continue;
    }

    seen.add(entry.id);
  }

  return issues;
}

function assignCatalogData(
  catalog: LoadedCatalog,
  key: CatalogFileKey,
  parsedData: Record<string, unknown>,
): void {
  switch (key) {
    case "origins":
      catalog.origins = parsedData.origins as OriginDefinition[];
      return;
    case "trails":
      catalog.trails = parsedData.trails as TrailDefinition[];
      return;
    case "skills":
      catalog.skills = parsedData.skills as SkillDefinition[];
      return;
    case "equipment":
      catalog.equipment = parsedData.equipment as EquipmentDefinition[];
      return;
    case "enemies":
      catalog.enemies = parsedData.enemies as EnemyDefinition[];
      return;
    case "starterAdventure":
      catalog.starterAdventure = parsedData.starterAdventure as StarterAdventureDefinition;
      return;
  }
}

async function loadCatalogFile<TKey extends CatalogFileKey>(
  baseDir: string,
  key: TKey,
  issues: ValidationIssue[],
  catalog: LoadedCatalog,
): Promise<void> {
  const fileName = catalogFileNames[key];
  const filePath = path.join(baseDir, fileName);
  const schema = catalogFileSchemas[key] as ZodType<Record<string, unknown>>;

  let sourceText: string;
  try {
    sourceText = await readFile(filePath, "utf8");
  } catch {
    issues.push(createValidationIssue(fileName, "<file>", "$", "Catalog file is missing"));
    return;
  }

  let parsed: unknown;
  try {
    parsed = parse(sourceText);
  } catch (error) {
    const message = error instanceof Error ? error.message : "YAML parsing failed";
    issues.push(createValidationIssue(fileName, "<file>", "$", message));
    return;
  }

  const parseResult = schema.safeParse(parsed);
  if (!parseResult.success) {
    const entrySource =
      parsed && typeof parsed === "object"
        ? readCatalogEntryValue(key, parsed as Record<string, unknown>)
        : undefined;

    issues.push(...zodIssuesToValidationIssues(fileName, entrySource, parseResult.error.issues));
    return;
  }

  const parsedData = parseResult.data;
  const entryValue = readCatalogEntryValue(key, parsedData) as unknown;
  if (Array.isArray(entryValue)) {
    issues.push(...createDuplicateIdIssues(fileName, entryValue as Array<{ id: string }>));
  }

  assignCatalogData(catalog, key, parsedData);
}

export async function loadCanonicalCatalog(baseDir = path.resolve(process.cwd(), "content/canon")): Promise<CatalogLoadResult> {
  const catalog = emptyCatalog();
  const issues: ValidationIssue[] = [];

  const keys = Object.keys(catalogFileSchemas) as CatalogFileKey[];
  for (const key of keys) {
    await loadCatalogFile(baseDir, key, issues, catalog);
  }

  issues.push(...collectReferenceIssues(catalog));

  return {
    catalog,
    issues,
    ok: issues.length === 0,
  };
}

