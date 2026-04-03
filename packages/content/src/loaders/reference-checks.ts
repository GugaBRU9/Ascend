import type {
  EnemyDefinition,
  EquipmentDefinition,
  OriginDefinition,
  SkillDefinition,
  StarterAdventureDefinition,
  TrailDefinition,
} from "../catalog-types.js";
import { createValidationIssue, type ValidationIssue } from "../validation/validation-issue.js";

export interface LoadedCatalog {
  origins: OriginDefinition[];
  trails: TrailDefinition[];
  skills: SkillDefinition[];
  equipment: EquipmentDefinition[];
  enemies: EnemyDefinition[];
  starterAdventure: StarterAdventureDefinition | null;
}

export function collectReferenceIssues(catalog: LoadedCatalog): ValidationIssue[] {
  const issues: ValidationIssue[] = [];

  const skillIds = new Set(catalog.skills.map((entry) => entry.id));
  const trailIds = new Set(catalog.trails.map((entry) => entry.id));
  const enemyIds = new Set(catalog.enemies.map((entry) => entry.id));

  for (const trail of catalog.trails) {
    trail.skillIds.forEach((skillId, index) => {
      if (!skillIds.has(skillId)) {
        issues.push(
          createValidationIssue(
            "trails.yaml",
            trail.id,
            `skillIds[${index}]`,
            `Trail references missing skill id '${skillId}'`,
          ),
        );
      }
    });
  }

  for (const skill of catalog.skills) {
    if (!trailIds.has(skill.trailId)) {
      issues.push(
        createValidationIssue(
          "skills.yaml",
          skill.id,
          "trailId",
          `Skill references missing trail id '${skill.trailId}'`,
        ),
      );
    }
  }

  const starterAdventure = catalog.starterAdventure;
  if (starterAdventure) {
    starterAdventure.scenes.forEach((scene, sceneIndex) => {
      scene.recommendedEnemies?.forEach((entry, enemyIndex) => {
        if (!enemyIds.has(entry.enemyId)) {
          issues.push(
            createValidationIssue(
              "starter-adventure.yaml",
              starterAdventure.id,
              `scenes[${sceneIndex}].recommendedEnemies[${enemyIndex}].enemyId`,
              `Starter adventure scene '${scene.id}' references missing enemy id '${entry.enemyId}'`,
            ),
          );
        }
      });
    });
  }

  return issues;
}

