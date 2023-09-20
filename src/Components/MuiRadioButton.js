import {
    Box,
    FormControl,
    FormControlLabel,
    FormHelperText,
    FormLabel,
    RadioGroup,
    Radio
} from '@mui/material'
import {useState} from 'react'

function RadioButton(){

    const [btn,setBtn] = useState(null)
    function handleOnchange(e){
        console.log("Changed")
        setBtn(e.target.value)
    }

    return(
        <Box>
            <FormControl>
                <FormLabel>
                    Years of Experience
                </FormLabel>
                <RadioGroup
                    name="job-experience-group"
                    value={btn}
                    onChange={handleOnchange}
                    row
                    >
                    <FormControlLabel control={<Radio/>} label="0-2" value='0-2' />
                    <FormControlLabel control={<Radio color="secondary" size='large'/>} label='2-4' value='4-6' />
                    <FormControlLabel control={<Radio/>} label="6-8" value="6-8" />
                    <FormControlLabel control={<Radio/>} label="8+" value="8+" />
                </RadioGroup>

                {/* <FormLabel>
                    Years of Experience
                </FormLabel>
                <RadioGroup
                    name="job-experience-group"
                    value={btn}
                    onChange={handleOnchange}
                    >
                    <FormControlLabel control={<Radio/>} label="0-2" value='0-2' />
                    <FormControlLabel control={<Radio color="secondary" size='large'/>} label='2-4' value='4-6' />
                    <FormControlLabel control={<Radio/>} label="6-8" value="6-8" />
                    <FormControlLabel control={<Radio/>} label="8+" value="8+" />
                </RadioGroup> */}
                
            </FormControl>
        </Box>
    )
}
export default RadioButton;
