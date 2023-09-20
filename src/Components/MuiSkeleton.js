import React from 'react'
import {Stack, Skeleton} from '@mui/material'
const MuiSkeleton = ()=>{
    return (
        <Stack spacing={8}>
            <Stack spacing={2} sx={{width:'250px'}}>
                <Skeleton variant='text'/>
                <Skeleton variant='circular' width={50} height={50}/>
                <Skeleton variant='rectangular' width={250} height={125}/>
            </Stack>
            <Stack spacing={2} sx={{width:'250px'}}>
                <Skeleton variant='text' animation='wave'/>
                <Skeleton variant='circular' width={50} height={50} animation={false}/>
                <Skeleton variant='rectangular' width={250} height={125} animation='wave'/>
            </Stack>

        </Stack>
    )
}

export default MuiSkeleton