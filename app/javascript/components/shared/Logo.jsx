import React from "react"
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import BusinessIcon from '@mui/icons-material/Business'
import { Link } from "react-router-dom"

const Logo = ({align}) => {
  return (
    <Link to='/' style={{ textDecoration: 'none' }}>
      <Box display='flex' justifyContent={align} alignItems='center'>
        <Box pr={1}>
          {/* <BusinessIcon fontSize='large' sx={{color: 'text.primary'}} /> */}
          <BusinessIcon fontSize='large' color='primary' />
        </Box>
        <div>
          <Box display='flex'>
            <Typography
              variant='h5'
              component='h2'
              color={'textPrimary'}
            >
              Mudge
            </Typography>
            <Typography
              variant='h5'
              component='h2'
              color={'textPrimary'}
              sx={{fontWeight: 'light'}}
            >
              Team
            </Typography>
          </Box>
          <Typography
            variant='caption'
            component='h5'
            color={'textPrimary'}
            align={align}

          >
            Commercial Real Estate
          </Typography>
        </div>
      </Box>
    </Link>
  )
}

export default Logo
