import React from "react"
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const HomeContent = ({title, description, children}) => {
  const theme = useTheme()
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'))

  return (
    <Box pt={lgUp ? 24 : 14}>
      <Typography variant='h4' component='h2' color='textPrimary' align='center'>{ title }</Typography>
      {
        description && (
        <Box pt={2}>
          <Typography
            variant='h6'
            component='h6'
            color='textSecondary'
            align='center'
            sx={{fontWeight: 'light', width: lgUp ? '60%' : 'inherit', margin: '0 auto'}}
          >
            {description}
          </Typography>
        </Box>
        )
      }
      { children }
    </Box>
  )
}

export default HomeContent
