import {Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, FormHelperText, } from '@mui/material'
import {useState} from 'react'
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { TempleBuddhistSharp } from '@mui/icons-material';

function MuiCheckBoxes(){
    
    const [tnc,setTnC] = useState(false)
    function handleOnChangeTnC(e){
        setTnC(e.target.checked)
    }

    const [bookmark,setBookmark] = useState(false)
    function handleOnChangeBookmark(e){
        console.log(e.target.checked)
        setBookmark(e.target.checked)
    }

    const [skills,setSkills] = useState([])
    function handleOnChangeSkills(e){
        // logic: Toggle e.target.value present in skills state
        const value = e.target.value;
        if(skills.includes(value)){
            let temp = skills.filter((item)=> item!==value);
            setSkills(temp)
        }
        else{
            let temp = [...skills,value]
            setSkills(temp)
        }
    }

    return(
        <Box>

            {/* Single Checkbox */}
            <Box>
                <FormControlLabel
                    label="I accept the terms and conditions."
                    control={<Checkbox checked={tnc} onChange={handleOnChangeTnC}/>}
                />
            </Box>

            {/* Checkbox as Icon */}
            <Box>
                <Checkbox
                    icon={<BookmarkBorderIcon/>}
                    checkedIcon={<BookmarkIcon/>}
                    checked={bookmark}
                    onChange={handleOnChangeBookmark}
                />
            </Box>

            <br/><br/>
            {/* CheckBox as Group */}
            <Box>
                 <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup >
                        <FormControlLabel
                            label='Html'
                            control={<Checkbox value='html' checked={skills.includes('html')} onChange={handleOnChangeSkills} />}
                        />
                        <FormControlLabel
                            label='CSS'
                            control={<Checkbox value='css' checked={skills.includes('css')} onChange={handleOnChangeSkills}/>}
                        />
                        <FormControlLabel
                            label='JavaScript'
                            control={<Checkbox value='javascript' checked={skills.includes('javascript')} onChange={handleOnChangeSkills}/>}
                        />
                        <FormControlLabel
                            label='ReactJS'
                            control={<Checkbox value='reactjs' checked={skills.includes('reactjs')} onChange={handleOnChangeSkills}/>}
                        />
                    </FormGroup>
                </FormControl>
            </Box>  
        </Box>
    )
}
export default MuiCheckBoxes;
