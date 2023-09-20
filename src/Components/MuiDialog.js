import React,{useState} from 'react'
import {Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions  } from '@mui/material'

const MuiDialog = ()=>{
    const [open,setOpen] = useState(false)
    const handleClose = (e,reason)=>{
        console.log("closed")
        console.log("REASON: ",reason)
        setOpen(false)
    }
    return(
        <>  
            <Button onClick={()=>{setOpen(true)}}>Open Dialog</Button>

            <Dialog open={open} onClose={()=>setOpen(false)}>
                <DialogTitle >Submit the Test</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to submit? 
                        You will not be able to see this again
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} >Cancel</Button>
                    <Button onClick={handleClose} autoFocus>Submit</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}

export default MuiDialog