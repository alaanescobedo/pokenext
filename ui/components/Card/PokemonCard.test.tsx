import { render, screen } from '@testing-library/react'
import { PokemonCard } from './PokemonCard'
import { useRouter } from 'next/router'

// TODO: Create a mock-file to put the mock data in
jest.mock('next/router', () => ({
  useRouter: jest.fn()
}))
const mockRouter = {
  push: jest.fn()
}
const mockBasicPokemonData = {
  name: 'bulbasaur',
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
  id: '1',
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
}

describe('PokemonCard', () => {
  it('should render the pokemon name', () => {
    render(<PokemonCard pokemon={mockBasicPokemonData} />)
    const pokemonName = screen.getByText(mockBasicPokemonData.name)
    expect(pokemonName).toBeInTheDocument()
  })
  it('shoudl redirect to the pokemon page if click in CardActionArea', () => {
    (useRouter as jest.Mock).mockReturnValue(mockRouter)

    render(<PokemonCard pokemon={mockBasicPokemonData} />)
    const cardActionArea = screen.getAllByRole('button')[0]
    cardActionArea.click()
    expect(mockRouter.push).toHaveBeenCalledWith(`/name/${mockBasicPokemonData.name}`)
  })
})