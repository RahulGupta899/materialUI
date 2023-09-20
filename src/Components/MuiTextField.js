import {Stack, TextField, InputAdornment, Input} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility';
import {useState} from 'react'

function MuiTextField(){

    const [value,setValue] = useState("10475");

    return(
        
        <Stack spacing={5}>
        <Stack direction="row" spacing={2}>
            <TextField label="FirstName" variant="filled"/>
            <TextField label="FirstName" variant="outlined"/>
            <TextField label="FirstName" variant="standard"/>
            <TextField label="Small Input" size="small" color="secondary"/>
        </Stack>

        <Stack direction="row" spacing={2}>
            <TextField label="Password" type="password"/>
            <TextField label="Password" type="password" required/>
            <TextField label="Password" type="password" helperText="Do not share your password"/>
            <TextField label="Password" type="password" helperText="Do not share your password" disabled/>
            <TextField label="Read Only" InputProps={{readOnly:true}}  value="ppdev.dev"/>
            <TextField label="Amount" InputProps={{startAdornment: <InputAdornment> $ </InputAdornment>}}/>
        </Stack>

        <Stack direction="row" spacing={2}>
            <TextField label="Amount" InputProps={{startAdornment: <InputAdornment position='start'> $ </InputAdornment>}}/>
            <TextField label="Weight" InputProps={{endAdornment: <InputAdornment postion="end">kg</InputAdornment>}}/>       
            <TextField label="Password" type="password" InputProps={{endAdornment: <InputAdornment> <VisibilityIcon/> </InputAdornment>}}/>
        </Stack>

        <TextField 
            label="Emp Id"
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            required

            error = {!value}       
            helperText= { !value ? "Please enter employee Id" : "Do not share"}
        />
        </Stack>
    )
}
export default MuiTextField;