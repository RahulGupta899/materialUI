import {Box} from '@mui/material'

function MuiBox(){

    return(
        <>
        <Box>Workout</Box>
        <Box component={"h1"}>Workout</Box>
        <Box component='span'>Workout</Box>
        <Box component='h6'>Workout</Box>
        
        {/*To Style the Component there are two ways */}
        {/*METHOD 1: using sx prop, it takes an Object */}
        <Box 
            sx={{
                backgroundColor: 'primary.main',
                color:'white',
                height:'100px',
                width:'100px',
                padding:'16px',
                '&:hover':{
                    backgroundColor: 'primary.light'
                }
            }}
        >
        Workout</Box>
        
        {/*METHOD 2: Using some defined Style Props That the componet allows */}
        <Box display='flex' bgcolor='success.light' height='100px' padding='16px' width='100px' >Workout</Box>
        </>
    )
}
export default MuiBox;