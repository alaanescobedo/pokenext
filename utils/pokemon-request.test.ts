import { POKE_API_BASE_URL } from '../setup/constants/pokemon'
import { TestPokemon } from '../setup/constants/tests.pokemon'
import HandlerRequest from './handler-requests'
import { getBasicAllPokemonsData, getFullPokemonData } from './pokemon-request'

const handlerGetSpy = jest.spyOn(HandlerRequest, 'get')

describe('@utils - pokemon-request', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })
  it('.getBasicAllPokemonsData - should call HandleRequest', async () => {
    handlerGetSpy.mockResolvedValueOnce(TestPokemon.basicListResponse)

    const res = await getBasicAllPokemonsData()
    expect(handlerGetSpy).toHaveBeenCalledWith({ endpoint: `${POKE_API_BASE_URL}/pokemon` })
    expect(handlerGetSpy).toHaveBeenCalledTimes(1)
    expect(res).toEqual(TestPokemon.basicListResponse.results)
  })
  it('.getFullPokemonData - should call HandleRequest', async () => {
    handlerGetSpy.mockResolvedValueOnce(TestPokemon.fullPokemonData)

    const query = 'bulbasaur'
    const res = await getFullPokemonData({ query })
    expect(handlerGetSpy).toHaveBeenCalledWith({ endpoint: `${POKE_API_BASE_URL}/pokemon/${query}` })
    expect(handlerGetSpy).toHaveBeenCalledTimes(1)
    expect(res).toEqual(TestPokemon.fullPokemonData)
  })
})