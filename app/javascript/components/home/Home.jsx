import React from "react"
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

import HandymanIcon from '@mui/icons-material/Handyman'
import WorkIcon from '@mui/icons-material/Work'

import PageWrapper from '../shared/PageWrapper'
import HomeContent from './HomeContent'
import HomeMainContent from './HomeMainContent'

const Home = () => {
  const theme = useTheme()
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'))

  const achievementItems = [
    { text: 'Properties Leased', amount: '2,000+'},
    { text: 'Properties Sold', amount: '100+'},
    { text: 'Completed Transactions', amount: '10,000+'},
    { text: 'Successful Clients', amount: '1,000+'},
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
    <PageWrapper>
      <HomeMainContent />
      <HomeContent
        title='Achievements'
        description='Our business has thrived due to our dedication on client success, our proven process, and relentless hard work.'
      >
        <Box display='flex' flexWrap={lgUp ? 'no-wrap' : 'wrap' } pt={5}>
          {
            achievementItems.map((item) => {
              return (
                <Card
                  key={item.text}
                  sx={{width: lgUp ? '25%' : '50%', boxShadow: 'none', backgroundColor: 'transparent'}}
                  raised={false}
                >
                  <Box p={3}>
                    <Typography
                      variant='h3'
                      component='h6'
                      sx={{color: 'primary.main', fontWeight: 'bold'}}
                      align='center'
                    >
                        {item.amount}
                    </Typography>
                    <Typography
                      variant='body1'
                      component='h6'
                      sx={{wordSpacing: lgUp ? '' : '100vw', fontWeight: 'bold' }}
                      color='textSecondary'
                      align='center'
                    >
                      {item.text}
                    </Typography>
                  </Box>
                </Card>
              )
            })
          }
        </Box>
      </HomeContent>

      <HomeContent
        title='Why Work With Us?'
      >
        <Box
          display='flex'
          flexDirection='column'
          flexWrap='wrap'
          pt={5}
          alignItems={lgUp ? 'center' : '' }
        >
          {
            workWithUsItems.map((item) => {
              return (
                <Box mb={3} key={item.text}>
                  <Card
                    sx={{backgroundColor: 'grey[100]', width: lgUp ? '500px' : '100%'}}
                    variant='outlined'
                  >
                    <Box p={lgUp ? 8 : 3}>
                      <Box display='flex' alignItems='center' justifyContent='center' pb={2}>
                        <Box mr={3}>
                          { item.icon }
                        </Box>
                        <Typography variant={lgUp ? 'h4' : 'h5'} component='h5' sx={{color: 'primary.main'}} align='center'>{item.title}</Typography>
                      </Box>
                      <Typography variant='body1' component='h6' color='textSecondary' align='center'>{item.text}</Typography>
                    </Box>

                  </Card>
                </Box>
              )
            })
          }
        </Box>
      </HomeContent>

      <HomeContent
        title='Client Reviews'
        description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum'
      >
      </HomeContent>

    </PageWrapper>

  )
}

export default Home
