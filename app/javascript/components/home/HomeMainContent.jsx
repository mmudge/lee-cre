import React from "react"
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from "react-router-dom"
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const HomeMainContent = () => {
  const theme = useTheme()
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'))

  const underlineStyle = {
    padding: '0 2px',
    boxShadow: `inset 0 -6px 0 0 ${theme.palette.primary.light}`,
  }

  return (
      <Box display='flex' alignItems='center' flexDirection={lgUp ? 'row' : 'column'}>
        <Box sx={{width: lgUp ? '50%' : 'inherit'}}>
          <Typography
            variant={lgUp ? 'h2' : 'h4'}
            component='h1' color='textPrimary'
            align={lgUp ? 'left' : 'center'}
            sx={{fontWeight: 'bold'}}
          >
            REAL ESTATE SOLUTIONS FOR YOUR <span style={{color: theme.palette.primary.main}}>BUSINESS</span>
          </Typography>
        </Box>
        <Box sx={{width: lgUp ? '50%' : 'inherit'}}>
          <Box pt={lgUp ? 4 : 2}>
            <Typography
              variant={lgUp ? 'h5' : 'h6'}
              component='h4'
              color='textSecondary'
              align={lgUp ? 'center' : 'center'}
              sx={{fontWeight: 'light'}}
              >
                We connect <strong style={{fontWeight: '500'}}>Buyers</strong> to <strong style={{fontWeight: '500'}}>Sellers</strong>, <strong style={{fontWeight: '500'}}>Landlords</strong> to <strong style={{fontWeight: '500'}}>Tenants</strong>, and <strong style={{fontWeight: '500'}}>Investors</strong> to <span style={{...underlineStyle}}><strong style={{fontWeight: '500'}}>Oppertunities</strong></span>
            </Typography>

            <Box pt={lgUp ? 4 : 8} display='flex' justifyContent='center' flexDirection={lgUp ? 'row' : 'column'}>
              <Box>
                <Button
                  variant='contained'
                  size='large'
                  fullWidth={lgUp ? false : true}
                  component={Link}
                  to='/listings'
                >
                  Find a Property
                </Button>
              </Box>
              <Box mt={lgUp ? 0 : 2} ml={lgUp ? 2 : 0}>
                <Button
                  variant='contained'
                  size='large'
                  fullWidth={lgUp ? false : true}
                  component={Link}
                  to='/contact'
                >
                  Contact Us
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
  )
}

export default HomeMainContent
