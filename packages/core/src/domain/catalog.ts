export type CatalogDomain =
  | "origins"
  | "trails"
  | "skills"
  | "equipment"
  | "enemies"
  | "starterAdventure";

export interface CatalogEntity<TId extends string> {
  id: TId;
  name: string;
}

export type CatalogById<TEntry extends CatalogEntity<string>> = Record<string, TEntry>;

export interface CatalogFile<TDomain extends CatalogDomain, TEntry> {
  domain: TDomain;
  entries: TEntry[];
}

