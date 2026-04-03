import type { DomainEvent } from "../domain/events.js";
import {
  createResolveTestReplayEnvelope,
  resolveTestReplayVersion,
  type ResolveTestReplayEnvelope,
} from "./replay-envelope.js";
import type { RollMode, TestModifier } from "../tests/resolve-test.js";
import { resolveTest } from "../tests/resolve-test.js";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function expectRecord(value: unknown, field: string): Record<string, unknown> {
  if (!isRecord(value)) {
    throw new Error(`Replay field '${field}' must be an object`);
  }

  return value;
}

function expectNumber(record: Record<string, unknown>, field: string): number {
  const value = record[field];
  if (typeof value !== "number" || Number.isNaN(value)) {
    throw new Error(`Replay field '${field}' must be a number`);
  }

  return value;
}

function expectBoolean(record: Record<string, unknown>, field: string): boolean {
  const value = record[field];
  if (typeof value !== "boolean") {
    throw new Error(`Replay field '${field}' must be a boolean`);
  }

  return value;
}

function expectString(record: Record<string, unknown>, field: string): string {
  const value = record[field];
  if (typeof value !== "string") {
    throw new Error(`Replay field '${field}' must be a string`);
  }

  return value;
}

function expectNumberArray(record: Record<string, unknown>, field: string): number[] {
  const value = record[field];
  if (!Array.isArray(value) || value.some((entry) => typeof entry !== "number")) {
    throw new Error(`Replay field '${field}' must be an array of numbers`);
  }

  return [...value];
}

function normalizeRollMode(value: unknown, field: string): RollMode {
  if (value === "normal" || value === "advantage" || value === "disadvantage") {
    return value;
  }

  throw new Error(`Replay field '${field}' must be a valid roll mode`);
}

function normalizeModifiers(value: unknown, field: string): TestModifier[] {
  if (!Array.isArray(value)) {
    throw new Error(`Replay field '${field}' must be an array`);
  }

  return value.map((entry, index) => {
    const record = expectRecord(entry, `${field}[${index}]`);

    return {
      source: expectString(record, "source"),
      value: expectNumber(record, "value"),
    };
  });
}

function normalizeEvents(value: unknown): DomainEvent<string, Record<string, unknown>>[] {
  if (!Array.isArray(value)) {
    throw new Error("Replay field 'events' must be an array");
  }

  return value.map((entry, index) => {
    const record = expectRecord(entry, `events[${index}]`);

    return {
      type: expectString(record, "type"),
      sequence: expectNumber(record, "sequence"),
      source: expectString(record, "source"),
      payload: expectRecord(record.payload, "payload"),
    };
  });
}

export function serializeResolveTestReplay(envelope: ResolveTestReplayEnvelope): string {
  return JSON.stringify(envelope, null, 2);
}

export function deserializeResolveTestReplay(source: string): ResolveTestReplayEnvelope {
  let parsed: unknown;

  try {
    parsed = JSON.parse(source);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown JSON parse error";
    throw new Error(`Replay JSON is invalid: ${message}`);
  }

  const root = expectRecord(parsed, "root");
  const version = expectNumber(root, "version");
  if (version !== resolveTestReplayVersion) {
    throw new Error(
      `Replay version '${String(version)}' is not supported; expected ${resolveTestReplayVersion}`,
    );
  }

  const command = expectRecord(root.command, "command");
  const result = expectRecord(root.result, "result");
  const normalizedCommand = {
    seed: expectNumber(command, "seed"),
    difficulty: expectNumber(command, "difficulty"),
    ...(command.mode === undefined
      ? {}
      : { mode: normalizeRollMode(command.mode, "command.mode") }),
    ...(command.modifiers === undefined
      ? {}
      : { modifiers: normalizeModifiers(command.modifiers, "command.modifiers") }),
    ...(command.opposed === undefined ? {} : { opposed: expectBoolean(command, "opposed") }),
    ...(command.favorCurrentStateOnTie === undefined
      ? {}
      : { favorCurrentStateOnTie: expectBoolean(command, "favorCurrentStateOnTie") }),
  };

  return {
    version: resolveTestReplayVersion,
    seed: expectNumber(root, "seed"),
    command: normalizedCommand,
    rolls: expectNumberArray(root, "rolls"),
    modifierBreakdown: normalizeModifiers(root.modifierBreakdown, "modifierBreakdown"),
    result: {
      total: expectNumber(result, "total"),
      natural: expectNumber(result, "natural"),
      degree: expectString(result, "degree") as ResolveTestReplayEnvelope["result"]["degree"],
      passed: expectBoolean(result, "passed"),
      difficulty: expectNumber(result, "difficulty"),
      margin: expectNumber(result, "margin"),
      rollMode: normalizeRollMode(result.rollMode, "result.rollMode"),
      modifierTotal: expectNumber(result, "modifierTotal"),
    },
    events: normalizeEvents(root.events),
  };
}

export function replayResolveTestFromJson(source: string): ResolveTestReplayEnvelope {
  const envelope = deserializeResolveTestReplay(source);
  const rerun = resolveTest(envelope.command);

  return createResolveTestReplayEnvelope(envelope.command, rerun);
}
