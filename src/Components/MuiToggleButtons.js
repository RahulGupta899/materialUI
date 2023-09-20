import React,{useState} from 'react'
import FormatBoldIcon from '@mui/icons-material/FormatBold'
import FormatItalicIcon from '@mui/icons-material/FormatItalic'
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined'
import {ToggleButton,ToggleButtonGroup,Stack,Typography} from '@mui/material'

function MuiToggleButtons(){

    // For Inclusive
    const [formats,setFormats] = useState([])  
    console.log(formats)

    function handleOnChange(e,icon){
        console.log("Icon Pressed...")
        setFormats(icon)
    }


    // For Exclusive
    const [formatExc,setFormatExc] = useState(null)
    console.log("Format: ",formatExc)

    function handleOnChangeExclusive(e,icon){
        console.log("Exclusive Toggle Group")
        setFormatExc(icon)
    }


    return(

        <Stack spacing={3}>

            <Typography variant='h6'>Inclusive Toggle</Typography>
            <ToggleButtonGroup value={formats} onChange={handleOnChange} color="secondary">
                <ToggleButton value='bold'>      <FormatBoldIcon/>        </ToggleButton>
                <ToggleButton value='italic'>    <FormatItalicIcon/>      </ToggleButton>
                <ToggleButton value='underline'> <FormatUnderlinedIcon/>  </ToggleButton>
            </ToggleButtonGroup>


        <Typography variant='h6'>Exclusive Toggle</Typography>
        <Stack direction="row">
            <ToggleButtonGroup 
                value={formatExc} 
                onChange={handleOnChangeExclusive} 
                exclusive
                size="large"
                orientation="horizontal"
                color="error"
            >
                <ToggleButton value='bold'>      <FormatBoldIcon/>        </ToggleButton>
                <ToggleButton value='italic'>    <FormatItalicIcon/>      </ToggleButton>
                <ToggleButton value='underline'> <FormatUnderlinedIcon/>  </ToggleButton>
            </ToggleButtonGroup>
        </Stack>

        </Stack>
    )
}
export default MuiToggleButtons;