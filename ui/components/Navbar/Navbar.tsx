import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import MenuIcon from '@mui/icons-material/Menu';
import LoginIcon from '@mui/icons-material/Login';

export const Navbar = () => {
  return (
    <AppBar >
      <Toolbar>
        <IconButton>
          <MenuIcon />
        </IconButton>
        <Typography>
          Pokedex
        </Typography>
        <Box sx={{ flex: 1 }} />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button variant='contained' color="secondary" startIcon={<LoginIcon />}>
            Login
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
