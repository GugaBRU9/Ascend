import type {
  AdventureId,
  EnemyId,
  EquipmentId,
  OriginId,
  SkillId,
  TrailId,
} from "@ascend/core";

export interface OriginDefinition {
  id: OriginId;
  name: string;
  trainedSkills: string[];
  narrativeEdge: string;
  oncePerSession: string;
}

export interface TrailDefinition {
  id: TrailId;
  name: string;
  role: string;
  skillIds: SkillId[];
}

export type SkillActivationType = "passive" | "action" | "reaction" | "free";
export type SkillTier = "I" | "II" | "III" | "IV";

export interface SkillDefinition {
  id: SkillId;
  trailId: TrailId;
  name: string;
  type: SkillActivationType;
  tier: SkillTier;
  costPe?: number;
  trigger?: string;
  requirement?: string;
  test?: string;
  effect: string;
  success?: string;
  critical?: string;
  extra?: string;
}

export type EquipmentCategory = "weapon" | "armor" | "shield" | "utility" | "consumable";

export interface EquipmentDefinition {
  id: EquipmentId;
  category: EquipmentCategory;
  name: string;
  attackBonus?: number;
  defenseBonus?: number;
  damageBase?: number;
  initiativeModifier?: number;
  requirement?: string;
  effect?: string;
  penalty?: string;
  notes?: string;
}

export interface EnemyActionDefinition {
  name: string;
  test: string;
  effect: string;
}

export interface EnemyDefinition {
  id: EnemyId;
  name: string;
  threatValue: number;
  role: string;
  life: number;
  defense: number;
  fortitude: number;
  reflexes: number;
  will: number;
  initiative: number;
  resistance?: string;
  actions: EnemyActionDefinition[];
  traits?: string[];
}

export interface StarterAdventureEnemyEntry {
  enemyId: EnemyId;
  count: number;
}

export interface StarterAdventureSceneDefinition {
  id: string;
  name: string;
  types: string[];
  summary: string;
  progressTarget?: number;
  pressureLimit?: number;
  risks?: string[];
  complications?: string[];
  recommendedEnemies?: StarterAdventureEnemyEntry[];
  rewards?: string[];
}

export interface StarterAdventureDefinition {
  id: AdventureId;
  name: string;
  premise: string;
  objectives: string[];
  scenes: StarterAdventureSceneDefinition[];
  rewards: string[];
}

