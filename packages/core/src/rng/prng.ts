import prand from "pure-rand";

export interface D20Roller {
  d20(): number;
}

export class SeededPrng implements D20Roller {
  private generator: prand.RandomGenerator;

  constructor(seed: number) {
    this.generator = prand.xoroshiro128plus(seed);
  }

  d20(): number {
    const [value, nextGenerator] = prand.uniformIntDistribution(1, 20, this.generator);
    this.generator = nextGenerator;
    return value;
  }
}

export function createSeededPrng(seed: number): SeededPrng {
  return new SeededPrng(seed);
}

