import React, {useState} from 'react'
import {Stack,Button, IconButton, ButtonGroup} from '@mui/material'
import SendIcon from '@mui/icons-material/Send';

export function MuiButtons(){

    const [formats, setFormats] = useState([]);

    function handleFormatChange(e,formats){
        console.log("ToggleButton Group")
        console.log(e)
        console.log(formats)
        setFormats(formats)
    }


    return(
        <Stack spacing={5}>
            <Stack spacing={3} direction="row">
                <Button variant="text" href="https://google.com">Text</Button>
                <Button variant="outlined" href="https://google.com">Outlined</Button>
                <Button variant="contained">Contained</Button>
            </Stack>

            <Stack spacing={2} direction="row">
                <Button variant="contained" color="secondary">secondary</Button>
                <Button variant="contained" color="info">Error</Button>
                <Button variant="contained" color="warning">Warning</Button>
                <Button variant="contained" color="info">Info</Button>
                <Button variant="contained" color="success">success</Button>
            </Stack>

            <Stack spacing={2} direction="row">
                <Button variant="text" color="secondary">secondary</Button>
                <Button variant="text" color="info">Error</Button>
                <Button variant="text" color="warning">Warning</Button>
                <Button variant="text" color="info">Info</Button>
                <Button variant="text" color="success">success</Button>
            </Stack>

            <Stack spacing={2} direction="row">
                <Button variant="outlined" color="secondary">secondary</Button>
                <Button variant="outlined" color="info">Error</Button>
                <Button variant="outlined" color="warning">Warning</Button>
                <Button variant="outlined" color="info">Info</Button>
                <Button variant="outlined" color="success">success</Button>
            </Stack>

            <Stack spacing={2} display="block" direction="row">
                <Button variant="contained" size="small">Small</Button>
                <Button variant="contained" size="medium">Medium</Button>
                <Button variant="contained" size="large">Large</Button>
            </Stack>

            <Stack spacing={2} direction="row">
                <Button variant="contained" startIcon={<SendIcon/>}>Send</Button>
                <Button 
                    variant="contained" 
                    endIcon={<SendIcon/>}
                    onClick={()=>alert("Clicked")}
                >
                Send</Button>
                <Button variant="contained" endIcon={<SendIcon/>} disableElevation>Send</Button>
                <Button variant="contained" endIcon={<SendIcon/>} disableRipple>Send</Button>
                <Button variant="outlined"  color='secondary' startIcon={<SendIcon/>}>Send</Button>
                <IconButton color="success" >  <SendIcon/> </IconButton>
                
            </Stack>

            <ButtonGroup>
                <Button>Left</Button>
                <Button>Middle</Button>
                <Button>Right</Button>
            </ButtonGroup>

            <Stack direction="row" >
                <ButtonGroup  orientation='vertical' variant="contained" color="secondary" size="large">
                    <Button>Left</Button>
                    <Button>Middle</Button>
                    <Button onClick={()=>alert("Clicked Right")}>Right</Button>
                </ButtonGroup>
            </Stack>
            
        </Stack>
    )
}
