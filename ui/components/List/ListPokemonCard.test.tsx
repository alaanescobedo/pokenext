import { render, screen } from '@testing-library/react';
import { PokeListResult } from '../../../types/pokemon-info.types';
import { ListCard } from './ListPokemonCard'

const mockPokemonsBasicDataList: PokeListResult[] = [
  {
    id: '1',
    name: 'bulbasaur',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    url: 'https://pokeapi.co/api/v2/pokemon/1'
  },
  {
    id: '2',
    name: 'ivysaur',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    url: 'https://pokeapi.co/api/v2/pokemon/2'
  },
  {
    id: '3',
    name: 'venusaur',
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png',
    url: 'https://pokeapi.co/api/v2/pokemon/3'
  },
]

describe('ListPokemonCard', () => {
  it('renders list correctly', () => {
    render(<ListCard pokemons={mockPokemonsBasicDataList} />);

    const renderedItems = screen.getAllByTestId('list-item');
    expect(renderedItems.length).toBe(3);

  })
})