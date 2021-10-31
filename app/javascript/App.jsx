import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Home from './components/Home'
import About from './components/About'
import Nav from './components/Nav'

const routes = [
  { path: '/about', component: <About />},
  { path: '/', component: <Home />}
]

const App = () => {
  return (
    <div>
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
    </div>
  )
}

export default App
