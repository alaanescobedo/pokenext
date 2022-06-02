import { POKE_API_BASIC_DATA_URL, POKE_API_FULL_DATA_URL } from '../setup/pokemon.constants'
import HandlerRequest from './handler-requests'
import { getBasicAllPokemonsData, getFullPokemonData } from './pokemon-request'

// TODO: add interfaces for mocks to be used as real data

const mockBasicPokemonListResponse = {
  results:{
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
  }
}
const mockFullPokemonResponse = {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/',
    weight: 69,
    height: 7,
    types: 'grass',
}
const handlerGetSpy = jest.spyOn(HandlerRequest, 'get')


describe('@utils - pokemon-request', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('.getBasicAllPokemonsData - should call HandleRequest', async () => {
    handlerGetSpy.mockResolvedValueOnce(mockBasicPokemonListResponse)

    const res = await getBasicAllPokemonsData()
    expect(handlerGetSpy).toHaveBeenCalledWith({ endpoint: POKE_API_BASIC_DATA_URL })
    expect(handlerGetSpy).toHaveBeenCalledTimes(1)
    expect(res).toEqual(mockBasicPokemonListResponse.results)
  })
  it('.getFullPokemonData - should call HandleRequest', async () => {
    handlerGetSpy.mockResolvedValueOnce(mockFullPokemonResponse)

    const query = 'bulbasaur'
    const res = await getFullPokemonData({ query })
    expect(handlerGetSpy).toHaveBeenCalledWith({ endpoint: `${POKE_API_FULL_DATA_URL}/${query}` })
    expect(handlerGetSpy).toHaveBeenCalledTimes(1)
    expect(res).toEqual(mockFullPokemonResponse)
  })
})