export interface DomainEvent<TType extends string = string, TPayload = unknown> {
  type: TType;
  sequence: number;
  source: string;
  payload: TPayload;
}

