import React from 'react'
import {Stack,Badge} from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
const MuiBatch = () => {
  return (
    <Stack direction='row' spacing={4} sx={{margin:'40px'}}>
        <Badge>
            <MailIcon/>
        </Badge>
        <Badge badgeContent={5} color="primary">
            <MailIcon/>
        </Badge>
        <Badge badgeContent={105} color="success">
            <MailIcon/>
        </Badge>
        <Badge badgeContent={105} max={999} color="error">
            <MailIcon/>
        </Badge>
        <Badge variant='dot' color='primary' invisible={false}>
            <MailIcon/>
        </Badge>
        <Badge badgeContent={0} color='primary' showZero>
            <MailIcon/>
        </Badge>
    </Stack>
  )
}

export default MuiBatch