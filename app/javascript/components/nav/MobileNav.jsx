import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import MenuIcon from '@mui/icons-material/Menu'
import Logo from '../shared/Logo'
import HomeIcon from '@mui/icons-material/Home'
import HandymanIcon from '@mui/icons-material/Handyman'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import { Link } from "react-router-dom"


export default function MobileNav() {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    console.log('drawer toggling', open)

    setOpen(open)
  };

  const listItems = [
    { text: 'HOME', icon: <HomeIcon />, link: '/' },
    { text: 'OUR PROCESS', icon: <HandymanIcon />, link: '/process' },
    { text: 'CONTACT', icon: <PhoneInTalkIcon />, link: '/contact' }
  ]

  const list = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <Box pt={5} pb={3}>
        <Logo align='center' />
      </Box>

      <List>
        {listItems.map((item) => (
          <ListItem button key={item.text} component={Link} to={item.link}>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment>
        <Box display='flex' justifyContent='space-between' alignItems='center' p={2}>
          <div>
            <Button
              variant='container'
              size='large'
              color='warning'
              sx={{backgroundColor: 'primary.dark'}}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon fontSize='large' sx={{color: 'white'}} />
            </Button>
          </div>
          <Logo />
        </Box>
        <Drawer
          anchor='left'
          open={open}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
