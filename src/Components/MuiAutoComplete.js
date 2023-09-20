import { ConnectingAirportsOutlined } from '@mui/icons-material'
import {Stack, Autocomplete, TextField, Typography} from '@mui/material'
import { useState } from 'react'
function MuiAutoComplete(){
    
    const skills = ['HTML','CSS','JavaScript','TypeScript','ReactJs','Nodejs','ExpressJs']
    const [skillState,setSkills] = useState("")
    function handleSkillsChange(e,newVal){
        console.log("Skills...")
        setSkills(newVal)
    }
    console.log(skillState)


    //********** Label Options From Array of Object ********** */
    const [city,setCity] = useState("")
    function handleCityChange(e,val){
        // console.log("val:",val)
        setCity(val)
    }
    const obj = [
        {idx:0, Name: 'Kolkata'},
        {idx:1, Name: 'Siliguri'},
        {idx:2, Name: 'New York'},
        {idx:3, Name: 'Los Angeles'},
        {idx:4, Name: 'Dhaka'},
        {idx:5, Name: 'Lucknow'},
    ]
    const objLabel = obj.map((item)=>item.Name)
    // console.log(objLabel)

    
    return(
        <Stack spacing={2} width='250px'>
            <Autocomplete
                options={skills}
                renderInput={
                    (params)=> <TextField {...params} label='skills'/>
                }
                value={skillState}
                onChange={handleSkillsChange}
            />
            
            <Typography variant='subtitle1'>Accepts user text</Typography>
            <Autocomplete
                options={skills}
                renderInput={
                    (params)=> <TextField {...params} label='skills'/>
                }
                value={skillState}
                onChange={handleSkillsChange}
                freeSolo
            />

        <Typography variant='subtitle1'>Label Options From Array of Object</Typography>
            <Autocomplete
                options={objLabel}
                renderInput={
                    (params)=> <TextField {...params} label='skills'/>
                }
                value={city}
                onChange={handleCityChange}   
            />
        </Stack>
    )
}
export default MuiAutoComplete