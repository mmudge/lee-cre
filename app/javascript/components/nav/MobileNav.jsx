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
import { Link } from "react-router-dom"

export default function MobileNav({navItems}) {
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }

    setOpen(open)
  };

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
        {navItems.map((item) => (
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
              size='large'
              color="primary"
              sx={{boxShadow: 3}}
              onClick={toggleDrawer(true)}
            >
              <MenuIcon fontSize='large' sx={{color: 'text.primary'}} />
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
