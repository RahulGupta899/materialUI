import React,{useState} from 'react'
import {Stack, Chip, Avatar} from '@mui/material'
import FaceIcon from '@mui/icons-material/Face'
const MuiChips = () => {
    const [chips,setChips] = useState(['Chip 1','Chip 2','Chip 3','Chip 4','Chip 5'])
    function handleDelete(chipName){
        console.log(chipName)
        const filteredArray = chips.filter((item)=>item!==chipName)
        setChips(filteredArray)
    }
    return (
        <Stack spacing={4} sx={{margin:'50px'}}>
            <Stack direction='row' spacing={2}>
                <Chip label='Chip' />
                <Chip label='Chip' color='primary'/>
                <Chip label='Chip' color='success' size='small'/>
                <Chip label='Chip outlined' color='secondary' variant='outlined' />
                <Chip label='Chip outlined' color='primary' avatar={<Avatar>S</Avatar>} variant='outlined'/>
                <Chip label='Chip' color='error' icon={<FaceIcon/>}/>
            </Stack>

            <Stack direction='row' spacing={2}>
                <Chip label='Click Me' color="error" onClick={()=>alert('Clicked...')} />
                <Chip label='Chip With Delete' color="success" onClick={()=>alert('Item Clicked Executed...')} onDelete={()=>alert('Item Delete Executed...')}/>
            </Stack>

            <Stack direction='row' spacing={2}>
                {
                    chips.map((chip,idx)=>{
                        console.log(chip)
                        return <Chip key = {idx} label={chip} onDelete={(e)=> {
                            handleDelete(chip)
                        }}/>
                    })
                }
            </Stack>
        </Stack>
    )
}

export default MuiChips