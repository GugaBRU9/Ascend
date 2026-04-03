type Brand<TValue, TName extends string> = TValue & { readonly __brand: TName };

export type OriginId = Brand<string, "OriginId">;
export type TrailId = Brand<string, "TrailId">;
export type SkillId = Brand<string, "SkillId">;
export type EquipmentId = Brand<string, "EquipmentId">;
export type EnemyId = Brand<string, "EnemyId">;
export type AdventureId = Brand<string, "AdventureId">;

export function asOriginId(value: string): OriginId {
  return value as OriginId;
}

export function asTrailId(value: string): TrailId {
  return value as TrailId;
}

export function asSkillId(value: string): SkillId {
  return value as SkillId;
}

export function asEquipmentId(value: string): EquipmentId {
  return value as EquipmentId;
}

export function asEnemyId(value: string): EnemyId {
  return value as EnemyId;
}

export function asAdventureId(value: string): AdventureId {
  return value as AdventureId;
}

