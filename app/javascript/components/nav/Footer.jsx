import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'

import Logo from '../shared/Logo'
import Button from '@mui/material/Button'

import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { Link } from "react-router-dom"

export default function Footer() {
  const theme = useTheme()
  const lgUp = useMediaQuery(theme.breakpoints.up('lg'))

  const year = new Date().getFullYear()

  const navItems = [
    { text: 'LISTINGS', link: '/listings' },
    { text: 'OUR PROCESS', link: '/process' },
    { text: 'CONTACT', link: '/contact' }
  ]

  return (
    <Toolbar sx={{backgroundColor: theme.palette.grey[100]}}>
      <Box py={lgUp ? 6 : 3} sx={{width: '100%'}}>
        <Box
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          flexDirection={lgUp ? 'row' : 'column'}
          px={lgUp ? 10 : 0}
          pt={lgUp ? 3 : 0}
          sx={{order: 1}}
        >
          <Box py={lgUp ? 0 : 2}>
            {
              navItems.map((item) => {
                return (
                  <Box key={item.text} pt={1}>
                    <Button
                      component={Link}
                      to={item.link}
                      sx={{color: 'text.primary'}}
                    >
                      {item.text}
                    </Button>
                  </Box>
                )
              })
            }
          </Box>
          <Box
            sx={{flexGrow: lgUp ? '1' : '0', order: lgUp ? 2 : 3}}
            display='flex'
            justifyContent='center'
            py={lgUp ? 0 : 2}
          >
            <div>
              <Logo />
              <Box pt={2}>
                <Typography
                  variant='caption'
                  component='p'
                  color='textSecondary'
                  align='left'
                >
                  Copyright {year}, all rights reserved.
                </Typography>
              </Box>
            </div>
          </Box>
          <Box
            sx={{order: lgUp ? 3 : 2}}
            py={lgUp ? 0 : 2}
          >
            <Typography
              variant='body1'
              component='p'
              color='textSecondary'
              align={lgUp ? 'left' : 'center' }
            >
              3240 Mission Inn Avenue
            </Typography>
            <Typography
              variant='body1'
              component='p'
              color='textSecondary'
              align={lgUp ? 'left' : 'center' }
            >
              Riverside, CA 92507
            </Typography>
            <Box pt={2}>
              <Typography
                variant='body1'
                component='p'
                color='textSecondary'
                align={lgUp ? 'left' : 'center' }
              >
                (951) 276-3600
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Toolbar>
  );
}
