import React, { useState } from 'react'
import {
  useMutation,
  gql
} from "@apollo/client"
import { useHistory } from "react-router-dom"


import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const LOGOUT_MUTATION = gql`
  mutation userLogout {
    userLogout {
      authenticatable {
        email
      }
    }
  }
`

const RegistrationMenu = () => {
  const history = useHistory()
  const [userLogout, { data, loading, error }] = useMutation(LOGOUT_MUTATION)

  if (data) {
    console.log('data',data)
  }

  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleAdminClick = () => {
    setAnchorEl(null)
    history.push('admin/listings')
  }

  const handleLogoutClick = () => {
    console.log('logout')
    setAnchorEl(null)
    userLogout().then(() => {
      localStorage.removeItem('authToken')
      localStorage.removeItem('authClient')
      localStorage.removeItem('authUid')

      history.push('')
    })


  }

  return (
    <div>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleAdminClick}>Admin</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default RegistrationMenu
