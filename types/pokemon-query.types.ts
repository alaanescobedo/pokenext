import { PokeListResult } from "./pokemon-info.types";
import { PokeTypesResult } from "./pokemon-types.types";

export interface PokeQueryType {
  types: 'types',
  list: 'list'
}

export interface PokeQuery {
  count: number;
  next: string;
  previous: null;
  results: PokeTypesResult[] | PokeListResult[]
}

