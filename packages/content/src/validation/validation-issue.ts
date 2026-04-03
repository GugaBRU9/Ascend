import type { ZodIssue } from "zod";

export type ValidationIssueSeverity = "error" | "warning";

export interface ValidationIssue {
  severity: ValidationIssueSeverity;
  file: string;
  entryId: string;
  field: string;
  message: string;
}

export function createValidationIssue(
  file: string,
  entryId: string,
  field: string,
  message: string,
  severity: ValidationIssueSeverity = "error",
): ValidationIssue {
  return {
    severity,
    file,
    entryId,
    field,
    message,
  };
}

function formatPathSegment(segment: string | number): string {
  if (typeof segment === "number") {
    return `[${segment}]`;
  }

  return String(segment);
}

function formatIssuePath(path: Array<string | number>): string {
  if (path.length === 0) {
    return "$";
  }

  return path.reduce<string>((current, segment) => {
    const formatted = formatPathSegment(segment);
    if (formatted.startsWith("[")) {
      return `${current}${formatted}`;
    }

    return current === "$" ? `${current}.${formatted}` : `${current}.${formatted}`;
  }, "$");
}

function findEntryIdFromPath(source: unknown, path: Array<string | number>): string {
  if (!Array.isArray(source)) {
    return "<file>";
  }

  const firstIndex = path.find((segment) => typeof segment === "number");
  if (typeof firstIndex !== "number") {
    return "<file>";
  }

  const candidate = source[firstIndex];
  if (
    candidate &&
    typeof candidate === "object" &&
    "id" in candidate &&
    typeof candidate.id === "string"
  ) {
    return candidate.id;
  }

  return `<entry:${firstIndex}>`;
}

function sanitizeIssuePath(path: PropertyKey[]): Array<string | number> {
  return path.filter((segment): segment is string | number => typeof segment !== "symbol");
}

export function zodIssuesToValidationIssues(
  file: string,
  sourceEntries: unknown,
  issues: ZodIssue[],
): ValidationIssue[] {
  return issues.map((issue) =>
    createValidationIssue(
      file,
      findEntryIdFromPath(sourceEntries, sanitizeIssuePath(issue.path)),
      formatIssuePath(sanitizeIssuePath(issue.path)),
      issue.message,
    ),
  );
}
