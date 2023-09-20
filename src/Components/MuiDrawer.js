import React,{useState} from 'react'
import {Drawer, Box, Typography, IconButton} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
const MuiDrawer = () => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
    <>
        <IconButton
            size='large'
            edge='start'
            color='inherit'
            onClick={()=>{setIsDrawerOpen(true)}}
        >
            <MenuIcon/>
        </IconButton>
        <Drawer 
            anchor='right'
            open={isDrawerOpen}
            onClose={()=> setIsDrawerOpen(false)}
        >
            <Box p={2} width='250px' textAlign='center' role='presentation'>
                <Typography variant='h6' component='div'>Side Panel</Typography>
            </Box>
        </Drawer>
    
    </>
  )

}

export default MuiDrawer