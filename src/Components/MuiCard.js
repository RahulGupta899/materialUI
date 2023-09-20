import{
    Box,
    Card,
    CardContent,
    CardActions,
    CardMedia,
    Typography,
    Button,
} from '@mui/material'


function MuiCard(){
    return(
        <Box width='300px'>
            <Card>
                <CardMedia
                    component='img'
                    height='140'
                    image='https://source.unsplash.com/random'
                    alt='unsplash image'
                />
                <CardContent>
                    <Typography gutterBottom variant='h5' component='div'>
                        React
                    </Typography>
                    <Typography variant='body2' color='text.secondary'>
                        Exercitation tempor minim ad velit voluptate quis do qui non irure duis consequat.
                        Excepteur aute adipisicing laborum dolor aliquip magna do officia esse esse eiusmod. 
                        Eiusmod voluptate esse ut dolore.
                        Sint pariatur quis qui fugiat aliquip ad anim proident sit.                    </Typography>
                </CardContent>
                <CardActions>
                    <Button variant='contained'>Share</Button>
                    <Button variant='contained'>Learn More</Button>
                </CardActions>

            </Card>
        </Box>
    )
}
export default MuiCard