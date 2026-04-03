import {
  asAdventureId,
  asEnemyId,
  asEquipmentId,
  asOriginId,
  asSkillId,
  asTrailId,
  type AdventureId,
  type EnemyId,
  type EquipmentId,
  type OriginId,
  type SkillId,
  type TrailId,
} from "@ascend/core";
import { z } from "zod";

import type { SkillActivationType, SkillTier } from "../catalog-types.js";

const nonEmptyString = z.string().trim().min(1);

const originIdSchema = z
  .string()
  .regex(/^origin\./)
  .transform((value): OriginId => asOriginId(value));

const trailIdSchema = z
  .string()
  .regex(/^trail\./)
  .transform((value): TrailId => asTrailId(value));

const skillIdSchema = z
  .string()
  .regex(/^skill\./)
  .transform((value): SkillId => asSkillId(value));

const equipmentIdSchema = z
  .string()
  .regex(/^(weapon|armor|shield|utility|consumable)\./)
  .transform((value): EquipmentId => asEquipmentId(value));

const enemyIdSchema = z
  .string()
  .regex(/^enemy\./)
  .transform((value): EnemyId => asEnemyId(value));

const adventureIdSchema = z
  .string()
  .regex(/^adventure\./)
  .transform((value): AdventureId => asAdventureId(value));

const skillActivationTypeSchema = z.enum([
  "passive",
  "action",
  "reaction",
  "free",
]) satisfies z.ZodType<SkillActivationType>;

const skillTierSchema = z.enum(["I", "II", "III", "IV"]) satisfies z.ZodType<SkillTier>;

export const originDefinitionSchema = z.object({
  id: originIdSchema,
  name: nonEmptyString,
  trainedSkills: z.array(nonEmptyString).min(1),
  narrativeEdge: nonEmptyString,
  oncePerSession: nonEmptyString,
});

export const trailDefinitionSchema = z.object({
  id: trailIdSchema,
  name: nonEmptyString,
  role: nonEmptyString,
  skillIds: z.array(skillIdSchema).min(1),
});

export const skillDefinitionSchema = z.object({
  id: skillIdSchema,
  trailId: trailIdSchema,
  name: nonEmptyString,
  type: skillActivationTypeSchema,
  tier: skillTierSchema,
  costPe: z.number().int().nonnegative().optional(),
  trigger: nonEmptyString.optional(),
  requirement: nonEmptyString.optional(),
  test: nonEmptyString.optional(),
  effect: nonEmptyString,
  success: nonEmptyString.optional(),
  critical: nonEmptyString.optional(),
  extra: nonEmptyString.optional(),
});

export const equipmentDefinitionSchema = z.object({
  id: equipmentIdSchema,
  category: z.enum(["weapon", "armor", "shield", "utility", "consumable"]),
  name: nonEmptyString,
  attackBonus: z.number().int().optional(),
  defenseBonus: z.number().int().optional(),
  damageBase: z.number().int().nonnegative().optional(),
  initiativeModifier: z.number().int().optional(),
  requirement: nonEmptyString.optional(),
  effect: nonEmptyString.optional(),
  penalty: nonEmptyString.optional(),
  notes: nonEmptyString.optional(),
});

export const enemyDefinitionSchema = z.object({
  id: enemyIdSchema,
  name: nonEmptyString,
  threatValue: z.number().int().positive(),
  role: nonEmptyString,
  life: z.number().int().positive(),
  defense: z.number().int(),
  fortitude: z.number().int(),
  reflexes: z.number().int(),
  will: z.number().int(),
  initiative: z.number().int(),
  resistance: nonEmptyString.optional(),
  actions: z
    .array(
      z.object({
        name: nonEmptyString,
        test: nonEmptyString,
        effect: nonEmptyString,
      }),
    )
    .min(1),
  traits: z.array(nonEmptyString).optional(),
});

export const starterAdventureDefinitionSchema = z.object({
  id: adventureIdSchema,
  name: nonEmptyString,
  premise: nonEmptyString,
  objectives: z.array(nonEmptyString).min(1),
  scenes: z
    .array(
      z.object({
        id: nonEmptyString,
        name: nonEmptyString,
        types: z.array(nonEmptyString).min(1),
        summary: nonEmptyString,
        progressTarget: z.number().int().positive().optional(),
        pressureLimit: z.number().int().positive().optional(),
        risks: z.array(nonEmptyString).optional(),
        complications: z.array(nonEmptyString).optional(),
        recommendedEnemies: z
          .array(
            z.object({
              enemyId: enemyIdSchema,
              count: z.number().int().positive(),
            }),
          )
          .optional(),
        rewards: z.array(nonEmptyString).optional(),
      }),
    )
    .min(1),
  rewards: z.array(nonEmptyString).min(1),
});

export const originsFileSchema = z.object({
  origins: z.array(originDefinitionSchema),
});

export const trailsFileSchema = z.object({
  trails: z.array(trailDefinitionSchema),
});

export const skillsFileSchema = z.object({
  skills: z.array(skillDefinitionSchema),
});

export const equipmentFileSchema = z.object({
  equipment: z.array(equipmentDefinitionSchema),
});

export const enemiesFileSchema = z.object({
  enemies: z.array(enemyDefinitionSchema),
});

export const starterAdventureFileSchema = z.object({
  starterAdventure: starterAdventureDefinitionSchema,
});

export const catalogFileSchemas = {
  origins: originsFileSchema,
  trails: trailsFileSchema,
  skills: skillsFileSchema,
  equipment: equipmentFileSchema,
  enemies: enemiesFileSchema,
  starterAdventure: starterAdventureFileSchema,
} as const;

export const catalogFileNames = {
  origins: "origins.yaml",
  trails: "trails.yaml",
  skills: "skills.yaml",
  equipment: "equipment.yaml",
  enemies: "enemies.yaml",
  starterAdventure: "starter-adventure.yaml",
} as const;

export type CatalogFileKey = keyof typeof catalogFileSchemas;
