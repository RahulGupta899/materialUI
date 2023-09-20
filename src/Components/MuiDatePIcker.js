
import React,{useState} from 'react'
import {Stack,TextField} from '@mui/material'

import {AdapterDateFns} from '@mui/x-date-pickers/AdapterDateFns'
import {LocalizationProvider} from '@mui/x-date-pickers/LocalizationProvider'
import {DatePicker} from  '@mui/x-date-pickers/DatePicker'
import {TimePicker} from '@mui/x-date-pickers/TimePicker'
import {DateTimePicker} from '@mui/x-date-pickers/DateTimePicker'


const MuiDatePIcker = () => {
  const [selectedDate,setSelectedDate] = useState(null);
  const [time,setTime] = useState(null);
  const [dateTime,setDateTime] = useState(null);

  console.log(dateTime)
  
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>

      <Stack spacing={4} sx={{width: '300px', margin:'100px'}}>
        <DatePicker 
          label='Date Picker'
          renderInput={(params)=> <TextField {...params}/> }
          value={selectedDate}
          onChange={(newVal)=>{setSelectedDate(newVal)}}
        />

        <TimePicker 
          label='Time Picker'
          renderInput={(params)=> <TextField {...params}/> }
          value={time}
          onChange={(newVal)=>{setTime(newVal)}}
        />

        <DateTimePicker 
          label='Date-Time Picker'
          renderInput={(params)=> <TextField {...params}/> }
          value={dateTime}
          onChange={(newVal)=>{setDateTime(newVal)}}
        />

      </Stack>


      

    </LocalizationProvider>
    
  )
}

export default MuiDatePIcker