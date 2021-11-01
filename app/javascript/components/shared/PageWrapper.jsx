import React from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import BgImage from 'images/office-bg.jpg'

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

  const imgStyle = {
    position: 'fixed',
    width: '100vw',
    filter: 'grayscale(1)',
    opacity: '0.1',
    display: lgUp ? '' : 'none'
  }

  return (
    <div>
      <img src={BgImage} style={{...imgStyle}} />
      <Box py={getPadding()} sx={{position: 'relative'}}>
        <Container>
          { children }
        </Container>
      </Box>
    </div>
  )
}

export default AppWrapper
