import {
    AppBar,
    Toolbar,
    IconBar,
    IconButton,
    Typography,
    Stack,
    Button,
    Menu,
    MenuItem
} from '@mui/material'
import { CatchingPokemon, OpenInBrowserOutlined } from '@mui/icons-material'
import {useState} from 'react'

function MuiNavBarWithMenuOptions(){
    const [anchorEl, setAnchorEl] = useState(null)
    const open = Boolean(anchorEl)
    const handleClick = (e)=>{
        setAnchorEl(e.target)
    }
    const handleClose = ()=>{
        setAnchorEl(null)
    }
    

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
                    <Button color='inherit' href='/features'>Features</Button>
                    <Button color='inherit' href='/pricings'>Pricing</Button>
                    <Button color='inherit'>About</Button>
                    <Button color='inherit'>Clients</Button>
                    <Button 
                        color='inherit' 
                        id='resources-button' 
                        onclick={handleClick}
                        aria-control={open? 'resources-menu' : undefined }
                        aria-haspopup = 'true'
                        aria-expanded = {open ? 'true': " undefined"}
                    >Resources</Button>
                </Stack>
                <Menu 
                    id='resources-menu' 
                    anchorEl={anchorEl} 
                    open={open} 
                    MenuListProps={{'aria-labelledby':'resources-button'}}
                    onClose={handleClose}
                >
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                    <MenuItem onClick={handleClose}>Podcast</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}
export default MuiNavBarWithMenuOptions