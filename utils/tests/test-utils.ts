import { PokeListResult } from "../../types/pokemon-info.types";

export const generateFakeResponse = ({ statusCode, statusText, message, ok }: any) => {
  return {
    status: statusCode,
    statusText,
    data: {
      message,
    },
    ok,
  };
}
export const generateFakeBasicPokemonData = ({ id, name }: { id: string, name: string }): PokeListResult => ({
  id,
  name,
  url: `https://pokeapi.co/api/v2/pokemon/${id}`,
  img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
})