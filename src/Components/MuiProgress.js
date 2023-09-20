import React from 'react'
import {Stack, CircularProgress, LinearProgress} from '@mui/material'
const MuiProgress = ()=>{
    return(
        <Stack spacing={20}>

            <Stack spacing={8} direction='row'>
                <CircularProgress/>
                <CircularProgress color='success' />
                <CircularProgress variant='determinate' value={80}/>
            </Stack>

            <Stack spacing={5} sx={{width:'600px'}} >
                <LinearProgress sx={{height:'60px'}}/>
                <LinearProgress color='success' sx={{height:'60px'}}/>
                <LinearProgress sx={{height:'60px'}} variant='determinate' value={80}/>
            </Stack>

            

        </Stack>
    )
}

export default MuiProgress