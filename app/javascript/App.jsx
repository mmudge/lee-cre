import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Home from './components/home/Home'
import Process from './components/Process'
import Contact from './components/Contact'
import Listings from './components/Listings'
import Nav from './components/nav/Nav'

import Box from '@mui/material/Box'

import AppWrapper from './AppWrapper'

const routes = [
  { path: '/listings', component: <Listings />},
  { path: '/process', component: <Process />},
  { path: '/contact', component: <Contact />},
  { path: '/', component: <Home />}
]

const App = () => {
  return (
    <AppWrapper>
      <Router forceRefresh={false}>
        <Nav />
        <Switch>
          {
            routes.map((route) => {
              return (
                <Route key={route.path} path={route.path}>
                  <Box py={5}>
                    {route.component}
                  </Box>
                </Route>
              )
            })
          }
        </Switch>
      </Router>
    </AppWrapper>
  )
}

export default App
