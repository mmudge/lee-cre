import React from "react"
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

const Logo = ({align}) => {
  return (
    <div>
      <Box display='flex' justifyContent={align}>
        <Typography
          variant='h5'
          component='h2'
          color='textPrimary'
        >
          Mudge
        </Typography>
        <Typography
          variant='h5'
          component='h2'
          color='textSecondary'
          sx={{fontWeight: 'light'}}
        >
          Team
        </Typography>
      </Box>
      <Typography
        variant='caption'
        component='h5'
        color='textSecondary'
        align={align}
      >
        Commercial Real Estate
      </Typography>
    </div>
  )
}

export default Logo
