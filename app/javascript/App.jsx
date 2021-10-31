import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Home from './components/Home'
import Process from './components/Process'
import Contact from './components/Contact'
import Listings from './components/Listings'
import Nav from './components/nav/Nav'

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
                  {route.component}
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
