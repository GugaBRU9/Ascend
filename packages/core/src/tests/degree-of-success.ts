export type DegreeOfSuccess =
  | "strong-success"
  | "success"
  | "failure"
  | "severe-failure";

const degreeOrder: DegreeOfSuccess[] = [
  "severe-failure",
  "failure",
  "success",
  "strong-success",
];

function baseDegreeFromMargin(margin: number): DegreeOfSuccess {
  if (margin >= 5) {
    return "strong-success";
  }

  if (margin >= 0) {
    return "success";
  }

  if (margin <= -5) {
    return "severe-failure";
  }

  return "failure";
}

export function promoteDegree(degree: DegreeOfSuccess): DegreeOfSuccess {
  const index = degreeOrder.indexOf(degree);
  return degreeOrder[Math.min(index + 1, degreeOrder.length - 1)] ?? degree;
}

export function demoteDegree(degree: DegreeOfSuccess): DegreeOfSuccess {
  const index = degreeOrder.indexOf(degree);
  return degreeOrder[Math.max(index - 1, 0)] ?? degree;
}

export interface ResolveDegreeInput {
  natural: number;
  total: number;
  difficulty: number;
  opposed?: boolean;
  favorCurrentStateOnTie?: boolean;
}

export function resolveDegree(input: ResolveDegreeInput): DegreeOfSuccess {
  const margin = input.total - input.difficulty;
  const isOpposedTie = input.opposed && input.favorCurrentStateOnTie && margin === 0;

  let degree = isOpposedTie ? "failure" : baseDegreeFromMargin(margin);

  if (input.natural === 20) {
    degree = promoteDegree(degree);
  }

  if (input.natural === 1) {
    degree = demoteDegree(degree);
  }

  return degree;
}
