import {Stack, Rating, Typography} from '@mui/material'
import {useState} from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon  from '@mui/icons-material/FavoriteBorder';


function MuiRating(){

    const [value,setValue] = useState(0)
    function handleChange(e,newVal){
        setValue(newVal)
    }
    console.log(value)

    return(
        <>
            <Typography variant="h6">Rate</Typography>
            <Stack spacing={4}>

                <Rating value={value} onChange={handleChange}/>
                
                <Rating value={value} onChange={handleChange} precision={0.5}/>

                <Rating 
                    value={value} 
                    onChange={handleChange} 
                    precision={0.5} 
                    size="large" 
                    icon={<FavoriteIcon fontSize='inherit' color='error'/>}
                    emptyIcon={<FavoriteBorderIcon fontSize='inherit'  />}
                    
                    highlightSelectedOnly
                />

                {/* To display product review */}
                <Rating value={2} onChange={handleChange} readOnly size="large"/>   
                
                <Rating 
                    value={3} 
                    onChange={handleChange} 
                    precision={0.5} 
                    size="large" 
                    icon={<FavoriteIcon fontSize='inherit' color='error'/>}
                    emptyIcon={<FavoriteBorderIcon fontSize='inherit'  />}
                    readOnly
                    highlightSelectedOnly
                />
               
            </Stack>
        </>
    )
}
export default MuiRating


// prop: highlight selected only is useful for eg like 
//       selecting among thumpsup,smile,love symbols