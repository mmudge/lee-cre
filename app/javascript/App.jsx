import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom"

import Home from './components/Home'
import About from './components/About'

const routes = [
  { path: '/about', component: <About />},
  { path: '/', component: <Home />}
]

const App = () => {
  return (
    <Router forceRefresh={false}>
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
  )
}

export default App
