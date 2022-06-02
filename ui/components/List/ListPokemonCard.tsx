import { Grid } from "@mui/material"
import { PokeListResult } from "../../../types/pokemon-info.types"
import { PokemonCard } from "../Card/PokemonCard"

interface PokemonListProps {
  pokemons: PokeListResult[]
}
export const ListCard = ({ pokemons }: PokemonListProps) => {

  return (
    <Grid container spacing={2} justifyContent='flex-start'>
      {pokemons.map((pokemon) => (
        <Grid item xs={6} sm={3} md={2} key={pokemon.name}>
          <PokemonCard pokemon={pokemon} />
        </Grid>
      ))}
    </Grid>
  )
}
