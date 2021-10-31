import React from 'react'
import {ThemeProvider} from '@mui/material/styles'
import theme from './theme'
import Box from '@mui/material/Box'

const AppWrapper = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{bgcolor: theme.palette.grey[50], height: '100%', minHeight: '100vh'}}>
        { children }
      </Box>
    </ThemeProvider>
  )
}

export default AppWrapper
