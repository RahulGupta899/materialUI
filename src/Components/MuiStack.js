import {Stack, Box, Divider} from '@mui/material'


function MuiStack(){
    return(
        <Stack 
            direction="row-reverse" 
            spacing={2} 
            sx={{border:'2px solid black', padding:'8px'}} 
            divider={<Divider orientation='vertical' flexItem />}
        >
            <Box sx={{
                bgcolor:'primary.light',
                height:'100px',
                width:'100px',
                color:'white',
                padding:'16px',    
                border:'1px dotted black',            
            }}>
            OMIND TECH 1
            </Box>
            <Box sx={{
                bgcolor:'primary.light',
                height:'100px',
                width:'100px',
                color:'white',
                padding:'16px', 
                border:'1px dotted black',
                              
            }}>
            OMIND TECH 2
            </Box>
            <Box sx={{
                bgcolor:'primary.light',
                height:'100px',
                width:'100px',
                color:'white',
                padding:'16px',     
                border:'1px dotted black',           
            }}>
            OMIND TECH 3
            </Box>
        </Stack>
    )
}
export default MuiStack