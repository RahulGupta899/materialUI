import {
    AppBar,
    Toolbar,
    IconBar,
    IconButton,
    Typography,
    Stack,
    Button
} from '@mui/material'
import { CatchingPokemon } from '@mui/icons-material'

function MuiNavbar(){
    return(
        <AppBar>
            <Toolbar>
                <IconButton size='large' edge='start' color='inherit' aria-label='logo'>
                    <CatchingPokemon/>
                </IconButton>
                <Typography variant='h6' component='div' sx={{flexGrow:1}} >
                    POKEMON APP
                </Typography>
                <Stack direction='row' spacing={2}>
                    <Button color='inherit'>Features</Button>
                    <Button color='inherit'>Pricing</Button>
                    <Button color='inherit'>About</Button>
                    <Button color='inherit'>Clients</Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}
export default MuiNavbar