import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from "@mui/material"
import { useRouter } from "next/router"
import { PokeListResult } from "../../../types/pokemon-info.types"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { Box } from "@mui/system";
import NextImage from "next/image";
// import FavoriteIcon from '@mui/icons-material/Favorite';

interface CardProps {
  pokemon: PokeListResult
}
export const PokemonCard = ({ pokemon }: CardProps) => {

  const router = useRouter()

  const handleClick = () => {
    router.push(`/name/${pokemon.name}`)
  }
  return (
    <Card>
      <CardActionArea
        onClick={handleClick}
      >
        <CardMedia
          component='div'
          title={pokemon.name}
        >
          <NextImage
            src={pokemon.img}
            height='180'
            width='180'
            objectFit='contain'
            alt={pokemon.name}
          />
        </CardMedia>
        <CardContent>
          <Typography variant='h6' textTransform='capitalize'>{pokemon.name}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Box flex={1} />
        <IconButton>
          <FavoriteBorderIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}
