import React from "react"
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { Link } from "react-router-dom"
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import HandymanIcon from '@mui/icons-material/Handyman'
import WorkIcon from '@mui/icons-material/Work'

const Home = () => {
  const theme = useTheme()
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'))

  const achievementItems = [
    { text: 'Properties Leased', amount: '2k+'},
    { text: 'Properties Sold', amount: '100+'},
    { text: 'Completed Transactions', amount: '10k+'},
    { text: 'Successful Clients', amount: '1k+'},
  ]

  const workWithUsItems = [
    {
      title: 'Process',
      text: 'Our proven process guarentees client success',
      icon: <HandymanIcon color='primary' fontSize='large' />
    },
    {
      title: 'Experience',
      text: 'Our team has over 50 years of combined experience',
      icon: <WorkIcon color='primary' fontSize='large' />
    },
  ]

  return (
    <Container>
      <Typography variant='h3' component='h1' color='textPrimary' align='center'>Mudge Team</Typography>
      <Typography variant='h5' component='h2' color='textSecondary' align='center'>Commercial Real Estate</Typography>
      <Box pt={5}>
        <Typography
          variant='h6'
          component='h4'
          color='textSecondary'
          align='center'
          sx={{fontWeight: 'normal'}}
          >We connect <strong>Buyers</strong> to <strong>Sellers</strong>, <strong>Landlords</strong> to <strong>Tenants</strong>, and <strong>Investors</strong> to <strong>Oppertunities</strong></Typography>
      </Box>
      <Box pt={8}>
        <Button
          variant='contained'
          size='large'
          fullWidth
          component={Link}
          to='/listings'
        >
          Find a Property
        </Button>
        <Box mt={2}>
          <Button
            variant='contained'
            size='large'
            fullWidth
            component={Link}
            to='/contact'
          >
            Contact Us
          </Button>
        </Box>
      </Box>
      <Box pt={14}>
        <Typography variant='h4' component='h2' color='textPrimary' align='center'>Achievements</Typography>
        <Box pt={2}>
          <Typography variant='body1' component='h6' color='textSecondary' align='center'>Our business has thrived due to our dedication on client success, our proven process, and relentless hard work.</Typography>
        </Box>
        <Box display='flex' flexWrap='wrap' pt={5}>
          {
            achievementItems.map((item) => {
              return (
                <Card
                  key={item.text}
                  sx={{width: '50%', boxShadow: 'none', backgroundColor: 'transparent'}}
                  raised={false}
                >
                  <Box p={3}>
                    <Typography variant='h3' component='h6' sx={{color: 'primary.main'}} align='center'>{item.amount}</Typography>
                    <Typography variant='body1' component='h6' sx={{wordSpacing: '100vw' }} color='textSecondary' align='center'>{item.text}</Typography>
                  </Box>
                </Card>
              )
            })
          }
        </Box>
      </Box>
      <Box pt={14}>
        <Typography variant='h4' component='h2' color='textPrimary' align='center'>Why Work With Us?</Typography>
        <Box display='flex' flexDirection='column' flexWrap='wrap' pt={5}>
          {
            workWithUsItems.map((item) => {
              return (
                <Box mb={3}>
                  <Card
                    key={item.text}
                    sx={{backgroundColor: 'transparent'}}
                    variant='outlined'
                    // raised={false}
                  >
                    <Box p={3}>
                      <Box display='flex' alignItems='center' justifyContent='center' pb={2}>
                        <Box mr={3}>
                          { item.icon }
                        </Box>
                        <Typography variant='h5' component='h5' sx={{color: 'primary.main'}} align='center'>{item.title}</Typography>
                      </Box>
                      <Typography variant='body1' component='h6' color='textSecondary' align='center'>{item.text}</Typography>
                    </Box>

                  </Card>
                </Box>
              )
            })
          }
        </Box>
      </Box>
      <Box pt={14}>
        <Typography variant='h4' component='h2' color='textPrimary' align='center'>Client Reviews</Typography>
        <Typography variant='body1' component='h6' color='textSecondary' align='center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</Typography>
      </Box>



    </Container>

  )
}

export default Home
