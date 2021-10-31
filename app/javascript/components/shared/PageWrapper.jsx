import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'


const AppWrapper = ({children}) => {
  const theme = useTheme()
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'))

  const getPadding = () => {
    if (lgUp) {
      return 16
    } else {
      return 10
    }
  }

  return (
    <Box pt={getPadding()}>
      <Container>
        { children }
      </Container>
    </Box>
  )
}

export default AppWrapper
