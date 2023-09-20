import React,{useState} from 'react'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'

const MuiBottomNavigation = () => {
    const[value,setValue] = useState(0)
    return (
        <BottomNavigation
            sx={{width:'100%', position:'absolute', bottom:0}}
            value={value}
            onChange={(e,newValue)=>{
                setValue(newValue)
            }}
            showLabels
        >
            <BottomNavigationAction label='Home' icon={<HomeIcon/>}/>
            <BottomNavigationAction label='Favorites' icon={<FavoriteIcon/>}/>
            <BottomNavigationAction label='Profile' icon={<PersonIcon/>}/>
        </BottomNavigation>
    )
}

export default MuiBottomNavigation