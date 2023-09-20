import React,{useMemo,useState} from 'react'
import {Avatar, Box,gridClasses,Typography} from '@mui/material'
import {DataGrid} from '@mui/x-data-grid'
import UserActions from './UserActions'
import {data} from './MuiTableHelper'
import moment from 'moment/moment'
import { grey } from '@mui/material/colors'

const MuiTable = () => {

  const [pageSize,setPageSize] = useState(5)
  const [rowId,setRowId] = useState(null)
  const columns = useMemo(()=>{
    return [
        {
          field: 'photoURL',
          headerName:'Avatar',
          width:60,
          renderCell:params=><Avatar src={params.row.photoURL}/>, 
          sortable:false
        },

        {
          field: 'name',
          headerName:'Name',
          width:170
        },

        {
          field: 'email',
          headerName:'Email',
          width:200
        },

        
        {
          field: 'role',
          headerName:'Role',
          width:100,
          type:'singleSelect',
          valueOptions:['Analyst','Admin','Developer','Manager','Tester'],
          editable:true
        },

        {
          field: 'active',
          headerName:'Active',
          width:100,
          type:'boolean',
          editable:true
        },

        {
          field: 'createdAt',
          headerName:'Created At',
          width:200,
          renderCell: params=>moment(params.row.createdAt).format('YYYY-MM-DD')
        },

        {
          field: '_id',
          headerName:'Id',
          width:220
        },

        {
          field: 'actions',
          headerName: 'Actions',
          type:'actions',
          renderCell: (params)=>{
            <UserActions {...{params,rowId, setRowId}}/>
          }
        }
    ]
  },[rowId])

  return (
    <Box sx={{height: 400, width:'100%'}}>
        <Typography 
            variant='h3'
            component="h3"
            sx={{textAlign: 'center', mt:3, mb:3}}
        >Manage Users</Typography>
        
        {/* Require Advance MUI */}
        <DataGrid
            columns={columns}
            rows={data}
            getRowId={row=>row._id}
            rowsPerPageOptions={[5,10,20]}
            pageSize={pageSize}
            onPageSizeChange={(size)=>{
              setPageSize(size)
            }}
            getRowSpacing={(params)=>({
              top: params.isFirstVisible ? 0 : 5,
              bottom: params.isLastVisible ? 0 : 5
            })}
            sx={{
              [`& .${gridClasses.row}`]:{
                bgcolor: (theme)=>theme.palette.mode === 'light'? grey[200]: grey[900]
              }
            }}
            onCellEditCommit = {(params)=> setRowId(params.id)}

        />
    </Box>
  )
}

export default MuiTable