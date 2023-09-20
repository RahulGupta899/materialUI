import React,{useState} from 'react'
import {DatePicker} from 'antd'
import dayjs from 'dayjs'

const {RangePicker} = DatePicker;


const AntDateRangePicker = ()=>{

    const [dates,setDates] = useState([dayjs('08-01-1999', "DD-MM-YYYY"), dayjs('21-02-2022', "DD-MM-YYYY")])
    console.log(dates)




    return (
        <>
        <h5>Ant Design</h5>
        {/* <DatePicker/> */}
        <RangePicker
            // defaultValue={null}
            value={dates}
            onChange = {(updatedDates)=>{
                console.log(updatedDates)
                const cleanDates = updatedDates.map((date)=>{
                    let checkDate = dayjs(date).format();    
                    checkDate = new Date(checkDate)
                    console.log("checkDate: ",checkDate)       
                    return checkDate        
                })

                setDates(updatedDates)
            }}
        />
        </>
    )
}
export default AntDateRangePicker
