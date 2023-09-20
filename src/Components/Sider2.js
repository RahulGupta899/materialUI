import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { getOptionUnstyledUtilityClass } from '@mui/base';
import {Link,NavLink} from 'react-router-dom'

const drawerWidth = 240;

function Sider2(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const options = [
    {
        name: 'Buttons',
        url:'/design/buttons'
    },
    {
        name: 'Card',
        url:'/design/card'
    },
    {
        name: 'Radio Button',
        url:'/design/radio'
    },
    {
        name: 'ImageList',
        url:'/design/imageList'
    },
    {
        name: 'Rating',
        url:'/design/rating'
    },
    {
      name: 'TextField',
      url:'/design/textfield'
    },
    {
      name: 'Switch Button',
      url:'/design/switch'
    },
    {
      name: 'Grid',
      url:'/design/grid'
    },
    {
      name: 'Typographies',
      url:'/design/typographies'
    },
    {
      name: 'Toggle Buttons',
      url:'/design/toggle-buttons'
    },
    {
      name: 'Dropdown',
      url:'/design/select'
    },
    {
      name: 'Checkbox',
      url:'/design/checkbox'
    },
    {
      name: 'Auto complete',
      url:'/design/autocomplete'
    },
    {
      name: 'Box',
      url:'/design/box'
    },
    {
      name: 'Stack',
      url:'/design/stack'
    },
    {
      name: 'Paper',
      url:'/design/paper'
    },
    {
      name: 'accordian',
      url:'/design/navbar'
    },
    {
      name: 'Menu Navbar',
      url:'/design/menu-navbar'
    },
    {
      name: 'Link',
      url:'/design/link'
    },
    {
      name: 'BreadCrumb',
      url:'/design/breadcrumb'
    },
    {
      name: 'Drawer',
      url:'/design/drawer'
    },
    {
      name: 'SpeedDial',
      url:'/design/speed-dial'
    },
    {
      name: 'Bottom Navigation',
      url:'/design/bottom-navigation'
    } ,
    {
      name:'Avatar',
      url:'/design/avatar'
    } ,
    {
      name:'Batch',
      url:'/design/batch'
    } ,
    {
      name:'List',
      url:'/design/list'
    }  ,
    {
      name:'Chips',
      url:'/design/chips'
    }  ,
    {
      name:'Tooltip',
      url:'/design/tooltip'
    }  ,
    {
      name:'Dynamic Input',
      url:'/design/dynamic-field'
    } ,
    {
      name: 'Tag Rule',
      url: '/design/tag-rule'
    },
    {
      name: 'Data Table', 
      url: '/design/data-table'
    },
    {
      name: 'Date Time',  
      url: '/design/mui-dates'
    },
    {
      name: 'Data Picker',  
      url: '/design/date-range-picker'
    },
    {
      name: 'Table',  
      url: "/design/mui-table"
    },
    {
      name: 'Alert',  
      url: "/design/mui-alert"
    },
    {
      name: 'Snackbar',  
      url: "/design/mui-snackbar"
    },
    {
      name: 'Dialog',  
      url: "/design/mui-dialog"
    },
    {
      name: 'Progress',  
      url: "/design/mui-progress"
    },
    {
      name: 'Skeleton',  
      url: "/design/mui-skeleton"
    },
  ]

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {options.map((eachOption, index) => (
        <NavLink to={eachOption.url} key={index}>
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{textDecoration:'none'}}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={<Typography sx={{textDecoration:'none'}} >{eachOption.name}</Typography>}   />
            </ListItemButton>
          </ListItem>
        </NavLink>
        ))}
      </List>
      <Divider />
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Material Design
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        
        <Toolbar /> 
        {props.children}
        
      </Box>
    </Box>
  );
}

Sider2.propTypes = {
  window: PropTypes.func,
};

export default Sider2;
