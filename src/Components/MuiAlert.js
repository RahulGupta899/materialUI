import React from 'react'
import {Stack, Alert, AlertTitle ,Typography , Button} from '@mui/material'
import CheckIcon from '@mui/icons-material/Check'
const MuiAlert = ()=>{
    return(
        <Stack spacing={2} sx={{width:'500px'}}>

            <br/><br/>
            <Alert severity='error'> Error Alert</Alert>
            <Alert severity='warning'> Warning Alert</Alert>
            <Alert severity='info'> Info Alert</Alert>
            <Alert severity='success'> <Typography variant='body1'>Success Alert</Typography></Alert>

            <br/><br/>
            <Alert variant='outlined' severity='error'> Error Alert</Alert>
            <Alert variant='outlined' severity='warning'> Warning Alert</Alert>
            <Alert 
                variant='outlined' 
                severity='info'
                action={
                    <Button color='inherit' size='small'>
                        UNDO
                    </Button>
                }
            > Info Alert</Alert>
            
            <Alert 
                variant='outlined' 
                severity='success'
                icon={<CheckIcon fontSize='inherit'/>}
                onClose={()=> alert('Close alert')}
            > Success Alert</Alert>

            <br/><br/>
            <Alert variant='filled' severity='error'> <AlertTitle> Title</AlertTitle> Error Alert</Alert>
            <Alert variant='filled' severity='warning'> <AlertTitle> Title</AlertTitle> Warning Alert</Alert>
            <Alert variant='filled' severity='info'> <AlertTitle> Title</AlertTitle> Info Alert</Alert>
            <Alert variant='filled' severity='success'> <AlertTitle> Title</AlertTitle> Success Alert</Alert>

            <br/><br/><br/>

        </Stack>
    )
}

export default MuiAlert