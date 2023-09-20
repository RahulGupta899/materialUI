import React,{useState} from 'react'
import {Container,TextField, IconButton ,Button} from '@mui/material'
import RemoveIcon from '@mui/icons-material/Remove'
import AddIcon from '@mui/icons-material/Add'


const TagRule = () => {

    const [expression,setExpression] = useState('')
    const [regx,setRegx] = useState('')

    const [inputORFields,setInputORField] = useState([
        {or:''},
    ]);
    console.log(inputORFields)
    

    function handleInputChange(e,idx){
        console.log(idx)
        const newArr = [...inputORFields]
        newArr[idx][e.target.name] = e.target.value;
        setInputORField(newArr)
    }

    function handleAddInput(){
        const newArr = [...inputORFields]
        newArr.push({or:''})
        setInputORField(newArr)
    }

    function handleRemoveInput(idx){
        const newArr = [...inputORFields]
        newArr.splice(idx,1)
        setInputORField(newArr)
    }


    const [inputANDFields,setInputANDField] = useState([
        {and:''},
    ]);
    console.log(inputANDFields)

    function handleANDInputChange(e,idx){
        console.log(idx)
        const newArr = [...inputANDFields]
        newArr[idx][e.target.name] = e.target.value;
        setInputANDField(newArr)
    }

    function handleAddANDInput(){
        const newArr = [...inputANDFields]
        newArr.push({or:''})
        setInputANDField(newArr)
    }

    function handleRemoveANDInput(idx){
        const newArr = [...inputANDFields]
        newArr.splice(idx,1)
        setInputANDField(newArr)
    }

    function generateExpression(){
        let OR = ''
        inputORFields.map((field)=>{
            OR = OR +" || "+ field.or
        })
        OR = '( '+(OR.slice(4)) + ')'

        let AND = ''
        inputANDFields.map((field)=>{
            AND = AND +" && "+ field.and
        })
        const exp = OR+AND

        let OR2 = ''
        inputORFields.map((field)=>{
            OR2 = OR2 +"|"+field.or
        })
        OR2 = '('+OR2.slice(1)+')/s*'

        let AND2 = ''
        inputANDFields.map((field)=>{
            const str = (field.and).split(" ")
            AND2 = str.join("/s*")
            console.log(AND2)
        })
        const exp2 = OR2+AND2
        setExpression(exp)
        setRegx(exp2)
    }

  return (
    <Container>
        <h1>Generate Tag</h1>
        <form>
            <h4>OR</h4>
            {
                inputORFields.map((field,idx)=>(
                    <div key={idx}>
                        <TextField
                            name='or'
                            label='OR'
                            variant='filled'
                            value={field.or}
                            onChange={(e)=>{handleInputChange(e,idx)}}
                        />
                        <IconButton>
                            <RemoveIcon onClick={()=>handleRemoveInput(idx)}/>
                        </IconButton>
                        <IconButton>
                            <AddIcon onClick={handleAddInput}/>
                        </IconButton>
                        <br/>
                    </div>
                ))
            }

            <h4>AND</h4>
            {
                inputANDFields.map((field,idx)=>(
                    <div key={idx}>
                        <TextField
                            name='and'
                            label='AND'
                            variant='filled'
                            value={field.and}
                            onChange={(e)=>{handleANDInputChange(e,idx)}}
                        />
                        <IconButton>
                            <RemoveIcon onClick={()=>handleRemoveANDInput(idx)}/>
                        </IconButton>
                        <IconButton>
                            <AddIcon onClick={handleAddANDInput}/>
                        </IconButton>
                        <br/>
                    </div>
                ))
            }
            <Button 
                variant='contained' 
                sx={{mt:'20px'}}
                onClick={generateExpression}
            >Execute</Button>
        </form>
        <br/><br/>
        {
        expression.length>0 && 
            <>
                <h4>Expression: {expression}</h4> 
                <h4>Regex: {regx}</h4> 
            </> 
        }
    </Container>
  )
}

export default TagRule