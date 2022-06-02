import HandlerRequest from "./handler-requests"
import { POKE_API_BASIC_DATA_URL, POKE_API_FULL_DATA_URL } from '../setup/pokemon.constants'
import { IPokemon, PokeListResult } from "../types/pokemon-info.types"
import { PokeQuery } from "../types/pokemon-query.types"

export const getBasicAllPokemonsData = async (): Promise<PokeListResult[]> => {
  const { results } = await HandlerRequest.get<PokeQuery>({ endpoint: `${POKE_API_BASIC_DATA_URL}` })
  return results as PokeListResult[]
}

export const getFullPokemonData = async ({ query }: { query: string }): Promise<IPokemon> => {
  const pokemons = await HandlerRequest.get<IPokemon>({ endpoint: `${POKE_API_FULL_DATA_URL}/${query}` })
  console.log({ pokemons })
  return pokemons
}