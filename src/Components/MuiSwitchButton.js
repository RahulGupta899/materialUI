import {Switch,Box, Checkbox, FormControlLabel, FormControl, FormLabel, FormGroup} from '@mui/material'
import {useState} from 'react'


function MuiSwitchButton(){

    const [toggle,setToggle] = useState(false)
    console.log(toggle)
    const handleChange = (e)=>{
        setToggle(e.target.checked)
    }

    const [prefs,setPrefs] = useState([])
    console.log(prefs)
    function handlePreferences(e){
        const value = e.target.value
        console.log(prefs.indexOf(value))
        if(prefs.indexOf(value)  === -1){  //  present
            console.log("Not Present")
            let temp = [...prefs,value]
            setPrefs(temp)
        }   
        else{
            console.log("Present")
            let temp = [...prefs]
            temp = temp.filter((item)=> item!== value)
            setPrefs(temp)
        }
    }

    return(
        <Box>
            <Box>
                <FormControlLabel label="DarkMode" control={<Switch checked={toggle} onChange={handleChange} />} />
            </Box>
            
            <Box>
                <FormControl>
                    <FormLabel>Preferences</FormLabel>
                    <FormGroup row>
                        <FormControlLabel label="Ice cream"   control={ <Switch value='iceCream'    checked={prefs.includes("iceCream")}      onChange={handlePreferences}/>} />
                        <FormControlLabel label="Movies"      control={ <Switch value='movies'      checked={prefs.includes("movies")}        onChange={handlePreferences}/>} />
                        <FormControlLabel label="Dates"       control={ <Switch value='dates'       checked={prefs.includes("dates")}         onChange={handlePreferences}/>} />
                        <FormControlLabel label="Vocations"   control={ <Switch value='vocations'   checked={prefs.includes("vocations")}     onChange={handlePreferences}/>} />
                        <FormControlLabel label="Laptop"      control={ <Switch value='laptop'      checked={prefs.includes("laptop")}        onChange={handlePreferences}/>} />
                        <FormControlLabel label="Smartphones" control={ <Switch value='smartphones' checked={prefs.includes("smartphones")}   onChange={handlePreferences}/>} />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}
export default MuiSwitchButton;