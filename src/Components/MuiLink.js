import React from 'react'
import {Stack, Link, Typography} from '@mui/material'
const MuiLink = () => {
  return (
    <Stack spacing={2}  m={4}>
        <Link href="#">Link</Link>
        <Link href="#" color='secondary' underline='hover'>Link</Link>
        <Link href='#' variant='h4' underline='none'>Link</Link>
        <Typography variant='h1'>
            <Link>Link</Link>
        </Typography>
    </Stack>
  )
}

export default MuiLink