import React from 'react'
import {Stack,Avatar, AvatarGroup} from '@mui/material'

const MuiAvatar = () => {
  return (
    <>
        <Stack direction='row' spacing={3} sx={{marginTop:'20px'}}>
            <Avatar>RK</Avatar>
            <Avatar sx={{bgcolor: 'primary.light'}}>MG</Avatar>
            <Avatar sx={{bgcolor: 'error.light'}}>SP</Avatar>
            <Avatar variant='rounded' sx={{bgcolor: 'primary.dark'}}>SP</Avatar>
            <Avatar variant='square' sx={{bgcolor: 'error.dark'}}>SP</Avatar>
            <Avatar variant='rounded' sx={{bgcolor: 'success.light', width:80, height:80}}>RP</Avatar>
        </Stack>

        <Stack direction='row' spacing={3}>
            <AvatarGroup max={5}>
                <Avatar src='https://randomuser.me/api/portraits/women/63.jpg'/>
                <Avatar src='https://randomuser.me/api/portraits/men/82.jpg'/>
                <Avatar src='https://randomuser.me/api/portraits/men/39.jpg'/>
                <Avatar src='https://randomuser.me/api/portraits/men/83.jpg'/>
                <Avatar src='https://randomuser.me/api/portraits/women/72.jpg'/>
                <Avatar src='https://randomuser.me/api/portraits/lego/5.jpg'/>
                <Avatar src='https://randomuser.me/api/portraits/women/28.jpg'/>
            </AvatarGroup>
        </Stack>
    </>
  )
}

export default MuiAvatar