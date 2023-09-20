import React from 'react'
import {Stack,Box,List,ListItem,ListItemText, ListItemIcon, ListItemAvatar, Avatar,ListItemButton,Divider } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail'
const MuiList = () => {
  return (
    <Box sx={{width:'400px', bgcolor:'#efefef', margin:'100px'}}>
      <List>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <ListItemIcon>
                <Avatar>
                  <MailIcon/>
                </Avatar>
              </ListItemIcon>
            </ListItemAvatar>
            <ListItemText primary='List Item 1' secondary='Additional Information'/>
          </ListItemButton>
        </ListItem>

        <Divider/>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <ListItemIcon>
                <Avatar>
                  <MailIcon/>
                </Avatar>
              </ListItemIcon>
            </ListItemAvatar>
            <ListItemText primary='List Item 2' secondary='Additional Information'/>
          </ListItemButton>
        </ListItem>

        <Divider/>

        <ListItem disablePadding>
          <ListItemButton>
          <ListItemAvatar>
            <ListItemIcon>
              <Avatar>
                <MailIcon/>
              </Avatar>
            </ListItemIcon>
          </ListItemAvatar>
          <ListItemText primary='List Item 3' secondary='Additional Information'/>
          </ListItemButton>
        </ListItem>

        <Divider/>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemAvatar>
              <ListItemIcon>
                <Avatar>
                  <MailIcon/>
                </Avatar>
              </ListItemIcon>
            </ListItemAvatar>
            <ListItemText primary='List Item 4' secondary='Additional Information'/>
          </ListItemButton>
        </ListItem>

      </List>
    </Box>
  )
}

export default MuiList