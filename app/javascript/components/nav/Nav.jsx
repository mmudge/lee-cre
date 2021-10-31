import * as React from 'react'
import MobileNav from './MobileNav'
import NavBar from './NavBar'
import HomeIcon from '@mui/icons-material/Home'
import HandymanIcon from '@mui/icons-material/Handyman'
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk'
import BusinessIcon from '@mui/icons-material/Business'

import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'

const Nav = () => {
  const theme = useTheme()
  const mdDown = useMediaQuery(theme.breakpoints.down('md'))

  const navItems = [
    { text: 'HOME', icon: <HomeIcon />, link: '/', show: mdDown },
    { text: 'LISTINGS', icon: <BusinessIcon />, link: '/listings', show: true },
    { text: 'OUR PROCESS', icon: <HandymanIcon />, link: '/process', show: true },
    { text: 'CONTACT', icon: <PhoneInTalkIcon />, link: '/contact', show: true }
  ]

  const visibleItems = navItems.filter((i) => i.show)

  if (mdDown) {
    return <MobileNav navItems={visibleItems} />
  } else {
    return <NavBar navItems={visibleItems} />
  }
}

export default Nav
