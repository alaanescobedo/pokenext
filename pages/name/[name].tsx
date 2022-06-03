import React from 'react'
import { GetStaticPaths, GetStaticProps } from 'next'
import { IPokemon } from '../../types/pokemon-info.types'
import { getBasicAllPokemonsData, getFullPokemonData } from '../../utils/pokemon-request'

interface PokemonByNamePageProps {
  pokemon: IPokemon
}

const PokemonByNamePage = ({ pokemon }: PokemonByNamePageProps) => {
  return (
    <div>
      {JSON.stringify(pokemon)}
    </div>
  )
}

export default PokemonByNamePage

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    const results = await getBasicAllPokemonsData()
    const pokeNames = results.map(({ name }) => name)

    return {
      paths: pokeNames.map(name => ({ params: { name } })),
      fallback: 'blocking'
    }
  } catch (error) {
    return {
      paths: [],
      fallback: 'blocking'
    }
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { name } = params as { name: string }
  const pokemon = await getFullPokemonData({ query: name })

  if (!pokemon) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      pokemon
    }
  }
}