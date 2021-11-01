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

  const bgStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    background: "url('images/office-bg.jpg')",
    backgroundAttachment: 'fixed',
    height: '100vh',
    width: '100vw'
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
      <Box pt={getPadding()} sx={{position: 'relative'}}>

        <Container>
          { children }
        </Container>
      </Box>
    </div>
  )
}

export default AppWrapper
