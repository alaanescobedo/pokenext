import { PokeListResult } from "../../types/pokemon-info.types"
import { PokeQuery } from "../../types/pokemon-query.types"
import { generateFakeBasicPokemonData } from "../../utils/tests/test-utils"

const basicPokemonData: PokeListResult = generateFakeBasicPokemonData({ id: '1', name: 'bulbasaur' })

const basicListResponse: PokeQuery = {
  count: 1,
  next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
  previous: null,
  results: [basicPokemonData]
}
const fullPokemonData = {
  name: 'bulbasaur',
  url: 'https://pokeapi.co/api/v2/pokemon/1',
  weight: 69,
  height: 7
}

export const TestPokemon = {
  basicPokemonData,
  basicListResponse,
  fullPokemonData
}