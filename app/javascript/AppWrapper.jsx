import React from 'react'
import {ApolloProvider} from "@apollo/client"
import client from './apolloClient'
import {ThemeProvider} from '@mui/material/styles'
import theme from './theme'
import Box from '@mui/material/Box'

const AppWrapper = ({children}) => {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Box sx={{bgcolor: theme.palette.grey[50], height: '100%', minHeight: '100vh'}}>
          { children }
        </Box>
      </ThemeProvider>
    </ApolloProvider>
  )
}

export default AppWrapper
