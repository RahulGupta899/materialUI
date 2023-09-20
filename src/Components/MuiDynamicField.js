import React,{useState} from 'react'
import {Container,TextField, IconButton } from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'


const MuiDynamicField = () => {
    const [inputFields,setInputField] = useState([
        {firstName:'',lastName:''},
        {firstName:'',lastName:''},
        {firstName:'',lastName:''},
        {firstName:'',lastName:''},
    ]);

    console.log(inputFields)

    function handleInputChange(e,idx){
        const newArr = [...inputFields]
        newArr[idx][e.target.name] = e.target.value;
        setInputField(newArr)
    }

    function handleAddInput(){
        const newArr = [...inputFields]
        newArr.push({firstName:'',lastName:''})
        setInputField(newArr)
    }

    function handleRemoveInput(idx){
        const newArr = [...inputFields]
        newArr.splice(idx,1)
        setInputField(newArr)
    }

  return (
    <Container>
        <h1>Add Fields</h1>
        <form>
            {
                inputFields.map((field,idx)=>(
                    <div key={idx}>
                        <TextField
                            name='firstName'
                            label='FirstName'
                            variant='filled'
                            value={field.firstName}
                            onChange={(e)=>{handleInputChange(e,idx)}}
                        />
                        <TextField
                            name='lastName'
                            label='LastName'
                            variant='filled'
                            value={field.lastName}
                            onChange={(e)=>{handleInputChange(e,idx)}}
                        />
                        <IconButton>
                            <RemoveIcon onClick={()=>handleRemoveInput(idx)}/>
                        </IconButton>
                        <IconButton>
                            <AddIcon onClick={handleAddInput}/>
                        </IconButton>
                    </div>)
                )
            }
        </form>
    </Container>
  )
}

export default MuiDynamicField