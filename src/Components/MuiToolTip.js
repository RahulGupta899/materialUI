import React from 'react'
import {IconButton, Tooltip} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
const MuiToolTip = () => {
  return (
    <Tooltip title='Delete' placement='right' arrow enterDelay={500} leaveDelay={1500} > 
        <IconButton>
            <DeleteIcon/>
        </IconButton>
    </Tooltip>
  )
}

export default MuiToolTip