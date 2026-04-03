import { mkdtemp, mkdir, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import { describe, expect, it } from "vitest";

import { loadCanonicalCatalog } from "../loaders/load-catalog.js";

async function writeInvalidCatalogFixture(baseDir: string): Promise<void> {
  await mkdir(baseDir, { recursive: true });

  await writeFile(
    path.join(baseDir, "origins.yaml"),
    `origins:
  - id: origin.teste
    name: Origem de Teste
    trainedSkills: [Fortitude]
    narrativeEdge: conhece o terreno
    oncePerSession: ignorar um risco menor
`,
  );

  await writeFile(
    path.join(baseDir, "trails.yaml"),
    `trails:
  - id: trail.teste
    name: Trilha de Teste
    role: validar referencias
    skillIds:
      - skill.inexistente
`,
  );

  await writeFile(
    path.join(baseDir, "skills.yaml"),
    `skills:
  - id: skill.teste
    trailId: trail.ausente
    name: Golpe de Teste
    type: action
    tier: I
    costPe: 1
    effect: executa um efeito simples
`,
  );

  await writeFile(
    path.join(baseDir, "equipment.yaml"),
    `equipment:
  - id: weapon.teste
    category: weapon
    name: Arma de Teste
    damageBase: 3
`,
  );

  await writeFile(
    path.join(baseDir, "enemies.yaml"),
    `enemies:
  - id: enemy.teste
    name: Inimigo de Teste
    threatValue: 1
    role: dummy
    life: 10
    defense: 10
    fortitude: 10
    reflexes: 10
    will: 10
    initiative: 0
    actions:
      - name: pancada
        test: +2 contra Defesa
        effect: 3 dano Fisico
`,
  );

  await writeFile(
    path.join(baseDir, "starter-adventure.yaml"),
    `starterAdventure:
  id: adventure.teste
  name: Aventura de Teste
  premise: validar referencias cruzadas
  objectives:
    - concluir a validacao
  scenes:
    - id: scene.teste
      name: Cena de Teste
      types: [investigacao]
      summary: cena simples
      recommendedEnemies:
        - enemyId: enemy.ausente
          count: 1
  rewards:
    - relatorio
`,
  );
}

describe("loadCanonicalCatalog", () => {
  it("loads the canonical content package without issues", async () => {
    const result = await loadCanonicalCatalog();

    expect(result.ok).toBe(true);
    expect(result.issues).toHaveLength(0);
    expect(result.catalog.origins.length).toBeGreaterThan(0);
    expect(result.catalog.trails.length).toBeGreaterThan(0);
    expect(result.catalog.skills.length).toBeGreaterThan(0);
    expect(result.catalog.equipment.length).toBeGreaterThan(0);
    expect(result.catalog.enemies.length).toBeGreaterThan(0);
    expect(result.catalog.starterAdventure?.name).toBe("O Sinal sob o Obelisco");
  });

  it("aggregates actionable issues for invalid content instead of failing fast", async () => {
    const tempRoot = await mkdtemp(path.join(os.tmpdir(), "ascend-catalog-"));
    await writeInvalidCatalogFixture(tempRoot);

    const result = await loadCanonicalCatalog(tempRoot);

    expect(result.ok).toBe(false);
    expect(result.issues.length).toBeGreaterThanOrEqual(3);
    expect(result.issues).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          file: "trails.yaml",
          entryId: "trail.teste",
          field: "skillIds[0]",
          severity: "error",
        }),
        expect.objectContaining({
          file: "skills.yaml",
          entryId: "skill.teste",
          field: "trailId",
          message: "Skill references missing trail id 'trail.ausente'",
        }),
        expect.objectContaining({
          file: "starter-adventure.yaml",
          entryId: "adventure.teste",
          field: "scenes[0].recommendedEnemies[0].enemyId",
        }),
      ]),
    );
  });
});
