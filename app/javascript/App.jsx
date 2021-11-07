import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"
import AppWrapper from './AppWrapper'
import Nav from './components/nav/Nav'
import Footer from './components/nav/Footer'

import Home from './components/home/Home'
import Listings from './components/listings/Listings'
import Login from './components/registration/Login'

import Process from './components/Process'
import Contact from './components/Contact'

const routes = [
  { path: '/login', component: <Login />},
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
        <Footer />
      </Router>

    </AppWrapper>
  )
}

export default App
