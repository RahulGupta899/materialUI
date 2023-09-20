import {Typography} from '@mui/material'
import {Outlet} from 'react-router-dom'

function Typographies(){
    return(
        <div>
            <Typography variant='h1'>h1 Heading</Typography>
            <Typography variant='h2'>h2 Heading</Typography>
            <Typography variant='h2'>h2 Heading</Typography>
            <Typography variant='h3'>h3 Heading</Typography>
            <Typography variant='h4' component='h1' gutterBottom>h4 Heading</Typography>
            <Typography variant='h5'>h5 Heading</Typography>
            <Typography variant='h6'>h6 Heading</Typography>
            <br/>
            <Typography variant='subtitle1'>sub1 h6 Heading</Typography>
            <Typography variant='subtitle2'>sub2 h6 Heading</Typography>
            <br/>
            <Typography variant='body1'>Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has survived not only 
            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>
            <Typography variant='body2' gutterBottom >Lorem Ipsum is simply dummy text of 
            the printing and typesetting industry. Lorem Ipsum has been the industry's 
            standard dummy text ever since the 1500s, when an unknown printer took a galley
            of type and scrambled it to make a type specimen book. It has survived not only 
            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
            software like Aldus PageMaker including versions of Lorem Ipsum.
            </Typography>

            <Outlet/>
        </div>
    )
}
export default Typographies