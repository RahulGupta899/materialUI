import {Grid, Box} from '@mui/material'
function MuiGrid(){
    return(
        <Grid container  sx={{border:'1px solid',padding:'5px'}} rowSpacing={1} columnSpacing={1} >
            <Grid item xs={12} sm={3} lg={6}>
                <Box bgcolor="primary.light" padding={2} >ITEM 1</Box>
            </Grid>
            <Grid item xs={12} sm={3} lg={2}>
                <Box bgcolor="primary.light" padding={2} >ITEM 2</Box>
            </Grid>
            <Grid item xs={12} sm={9} lg={2}>
                <Box bgcolor="primary.light" padding={2} >ITEM 3</Box>
            </Grid>
            <Grid item xs={12} sm={12} lg={2}>
                <Box bgcolor="primary.light" padding={2} >ITEM 4</Box>
            </Grid>
        </Grid>
    )
}
export default MuiGrid