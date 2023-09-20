import React,{useState,forwardRef} from 'react'
import {Button, Snackbar, Alert, AlertProps} from '@mui/material'

// custom snackBar
const SnackbarAlert = forwardRef(
    function SnackbarAlert(props,ref){
        return <Alert elevation={6} ref={ref} {...props} />
    }
)



const MuiSnackBar = ()=>{
    const [open,setOpen] = useState(false)
    const handleClose = (e,reason)=>{
        console.log(reason)
        if(reason === 'clickaway') return 
        setOpen(false)
    }
    const handleSubmit = ()=>{
        setOpen(true)
    }
    return(
        <>
            <Button onClick={handleSubmit}>Submit</Button>
            
            {/* <Snackbar
                message='Form Submitted successfully!'
                open={open}
                autoHideDuration={4000}
                onClose={handleClose}
                anchorOrigin={{
                    vertical:'bottom',
                    horizontal:'center'
                }}
                
            /> */}

            {/* USING THE CUSTOM SNACKBAR */}
            <Snackbar open={open}>
                <SnackbarAlert 
                    onClose={handleClose}
                    severity='success'
                >
                    Form Submitted Successfully!
                </SnackbarAlert>
            </Snackbar>
        </>
    )
}

export default MuiSnackBar