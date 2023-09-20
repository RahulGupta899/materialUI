import React from 'react'
import {Box, Breadcrumbs, Link, Stack, Typography} from '@mui/material'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'

const MuiBreadCrumb = () => {
  return (
    <Stack spacing={4} m={4}>
        <Breadcrumbs>
            <Link href="#" underline='hover'>Home</Link>
            <Link href="#" underline='hover'>Catalog</Link>
            <Link href="#" underline='hover'>Accessories</Link>
            <Link href="#" underline='hover'>New</Link>
            <Typography color='text.primary'>Shoe</Typography>
        </Breadcrumbs>

        {/* Separator Prop */}
        <Breadcrumbs separator="--">
            <Link href="#" underline='hover'>Home</Link>
            <Link href="#" underline='hover'>Catalog</Link>
            <Link href="#" underline='hover'>Accessories</Link>
            <Link href="#" underline='hover'>New</Link>
            <Typography color='text.primary'>Shoe</Typography>
        </Breadcrumbs>

        <Breadcrumbs 
            separator={<NavigateNextIcon/>}
            maxItems={2} // By default 8
            itemsBeforeCollapse={2}
            // itemAfterCollapse={2}
        >
            <Link href="#" underline='hover'>Home</Link>
            <Link href="#" underline='hover'>Catalog</Link>
            <Link href="#" underline='hover'>Accessories</Link>
            <Link href="#" underline='hover'>New</Link>
            <Typography color='text.primary'>Shoe</Typography>
        </Breadcrumbs>
    </Stack>
  )
}

export default MuiBreadCrumb