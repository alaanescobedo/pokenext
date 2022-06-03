import { generateFakeBasicPokemonData } from '../../../utils/tests/test-utils';
import { render, screen } from '../../test-dom-utils';
import { ListCard } from './ListPokemonCard'

const mockPokemonsBasicDataList = [
  generateFakeBasicPokemonData({id: '1', name: 'Bulbasaur'}),
  generateFakeBasicPokemonData({id: '2', name: 'Ivysaur'}),
  generateFakeBasicPokemonData({id: '3', name: 'Venusaur'}),
]

describe('ListPokemonCard', () => {
  it('renders list correctly', () => {  
    render(<ListCard pokemons={mockPokemonsBasicDataList} />);

    const renderedItems = screen.getAllByTestId('list-item');
    expect(renderedItems.length).toBe(3);
  })
})