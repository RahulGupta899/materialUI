import {useState} from 'react'
import {Box, TextField, MenuItem, Typography} from '@mui/material'

function MuiSelect(){

    // Single Select
    const [tag,setTag]  = useState("")
    function handleChange(e){
        setTag(e.target.value)
    }

    // Multiple Select
    const[tags,setTags] = useState([])
    console.log(tags)
    function handleChangeMultiple(e){
        console.log("***********************")
        console.log("Inside function")
        console.log("PREV: ",tags)

        setTags(e.target.value)
    }


    return(
        <Box width="250px">

            <Typography variant="subtitle2" gutterBottom>Variation 1: Single Select</Typography>
            <TextField
                select
                fullWidth
                value={tag}
                onChange={handleChange}
                label="Select Campaign"
            >
                <MenuItem value="vital">Vital</MenuItem>
                <MenuItem value="oyo">OYO</MenuItem>
                <MenuItem value="amazon">Amazon</MenuItem>
                <MenuItem value="wipro">Wipro</MenuItem>
                <MenuItem value="lenovo">Lenovo</MenuItem>
            </TextField>

            <br/><br/>
            <Typography variant="subtitle2" gutterBottom>Variation 2: Multi Select</Typography>
            <TextField
                select
                SelectProps={{multiple:true}}
                fullWidth
                value={tags}
                onChange={handleChangeMultiple}
                label="Select Campaign"
                size="small"
                color="secondary"
                helperText="You can select multiple items"
            >
                <MenuItem value="vital">Vital</MenuItem>
                <MenuItem value="oyo">OYO</MenuItem>
                <MenuItem value="amazon">Amazon</MenuItem>
                <MenuItem value="Lenovo">Lenovo</MenuItem>
                <MenuItem value="wipro">Wipro</MenuItem>
            </TextField>

            <br/><br/>
            <Typography variant="subtitle2">Variation 3: Multi select with checkboxes ...</Typography>
            {/* Variation 3: With the Options with checkboxes and display 
                             is List of chips */}
        </Box>
    )
}
export default MuiSelect;