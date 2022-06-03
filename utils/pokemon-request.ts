import HandlerRequest from "./handler-requests"
import { IPokemon, PokeListResult } from "../types/pokemon-info.types"
import { PokeQuery } from "../types/pokemon-query.types"
import { POKE_API_BASE_URL } from "../setup/constants/pokemon"

export const getBasicAllPokemonsData = async (): Promise<PokeListResult[]> => {
  const { results } = await HandlerRequest.get<PokeQuery>({ endpoint: `${POKE_API_BASE_URL}/pokemon` })
  return results as PokeListResult[]
}

export const getFullPokemonData = async ({ query }: { query: string }): Promise<IPokemon> => {
  const pokemons = await HandlerRequest.get<IPokemon>({ endpoint: `${POKE_API_BASE_URL}/pokemon/${query}` })
  return pokemons
}