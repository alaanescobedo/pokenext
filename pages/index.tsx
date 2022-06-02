import type { GetStaticProps, NextPage } from 'next'
import { ListCard } from '../ui/components/List/ListPokemonCard'
import { AppLayout } from '../ui/layout/AppLayout'
import { POKE_API_CARD_IMG_URL } from '../setup/pokemon.constants'
import { getBasicAllPokemonsData } from '../utils/pokemon-request'
import styles from '../styles/Home.module.css'

interface HomeProps {
  pokemons: any[]
}

const Home: NextPage<HomeProps> = ({ pokemons }: HomeProps) => {
  console.log('INDEX', { pokemons })
  return (
    <div className={styles.container}>
      <AppLayout pageTitle='PokeApp' pageDescription='List of all the pokimons'>
        <ListCard pokemons={pokemons} />
      </AppLayout>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async () => {
  try {
    const pokemonsResults = await getBasicAllPokemonsData()
    const pokemons = pokemonsResults.map((poke, i) => ({
      ...poke,
      id: `${i + 1}`,
      img: `${POKE_API_CARD_IMG_URL}/${i + 1}.svg`
    }))

    return {
      props: {
        pokemons
      }
    }
  } catch (error) {
    return {
      props: {
        pokemons: []
      }
    }
  }
}
