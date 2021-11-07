import React, { useEffect, useState, useContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Redirect,
  useLocation,
  useHistory
} from "react-router-dom"
import { gql, useLazyQuery, useQuery } from '@apollo/client';

import AppWrapper from './AppWrapper'
import Nav from './components/nav/Nav'
import Footer from './components/nav/Footer'

import Home from './components/home/Home'
import Listings from './components/listings/Listings'
import Login from './components/registration/Login'
import AdminListings from './components/admin/AdminListings'

import Process from './components/Process'
import Contact from './components/Contact'


const CURRENT_USER_QUERY = gql`
  query currentUser {
    currentUser {
      email
    }
  }
`

const AdminRoutes = () => {


  let match = useRouteMatch()
  // let location = useLocation()
  // let history = useHistory()
  // console.log('history', history)
  // const [loggedIn, setLoggedIn] = useState(false)
  // let loggedIn = false
  // const [fetchCurrentUser, { loading, data }] = useLazyQuery(CURRENT_USER_QUERY)
  // const { loading, data, refetch } = useQuery(CURRENT_USER_QUERY)

  // const fetchCurrentUser = async() => {
  //   setLoggedIn(false)
  //   await fetchCurrentUser()
  //   if (data && data.currentUser) {
  //     console.log('current user data', data.currentUser)
  //     console.log('setting logged in user TRUE')
  //     // setLoggedIn(true)
  //     // loggedIn = true
  //     setLoggedIn(true)
  //   }
  // }


  // useEffect(() => {
  //   // setLoggedIn(false)
  //   console.log('location changed', location)
  //   // setLoggedIn(false)
  //   // loggedIn = false
  //   // refetch()
  // }, [location])

  // useEffect(() => {
  //   // setLoggedIn(false)
  //   console.log('history changed', history)
  //   // setLoggedIn(false)
  //   // loggedIn = false
  //   // refetch()
  // }, [history])
  // const bla = async() => {
  //   await fetchCurrentUser()
  // }

  // bla()
  // let loggedIn = false
  // setLoggedIn(false)
  // if (data && data.currentUser) {
  //   console.log('current user data', data.currentUser)
  //   console.log('setting logged in user TRUE')
  //   // setLoggedIn(true)
  //   loggedIn = true
  //   history.push(history.location.pathname)
  // } else {
  //   console.log('pushing to login')
  //   history.push('/login')
  //   loggedIn = false
  // }
  // fetchCurrentUser()

  // console.log('logged in', loggedIn)
  const renderComponent = () => {
    if (loading) {
      return <h1>Loading</h1>
    } else if (data && data.currentUser) {
      return <AdminListings />
    } else {
      <Redirect to="/login" />
    }
  }

  const routes = [
    {
      path: '/listings',
      // component: auth.user ? <AdminListings /> : <Redirect to="/login" />
      // component: renderComponent()
      component: <AdminListings />
    },
  ]

  // if (loading) {
  //   return <h1>loading</h1>
  // }

  return (
    <Switch>
      {
        routes.map((route) => {
          return (
            <Route key={route.path} path={`${match.url}${route.path}`}>
              { route.component }
            </Route>
          )
        })
      }
    </Switch>
  )
}

const routes = [
  { path: '/login', component: <Login />},
  { path: '/admin', component: <AdminRoutes />},
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
