import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch,
  Redirect
} from "react-router-dom"
import { gql, useQuery, useLazyQuery } from '@apollo/client';

import AppWrapper from './AppWrapper'
import Nav from './components/nav/Nav'
import Footer from './components/nav/Footer'

import Home from './components/home/Home'
import Listings from './components/listings/Listings'
import Login from './components/registration/Login'
import AdminListings from './components/admin/AdminListings'

import Process from './components/Process'
import Contact from './components/Contact'

import LinearProgress from '@mui/material/LinearProgress';

const CURRENT_USER_QUERY = gql`
  query currentUser {
    currentUser {
      id
      email
    }
  }
`

function PrivateRoute({ children, ...rest }) {
  const token = localStorage.getItem('token')
  const { loading, data, error } = useQuery(CURRENT_USER_QUERY, {
    onError: (e) => console.log('error', error),
    fetchPolicy: "network-only",
    errorPolicy: 'ignore'
  })

  // const [fetchCurrentUser, { called, loading, data }] = useLazyQuery(CURRENT_USER_QUERY, {
  //     notifyOnNetworkStatusChange: true
  //   }
  // )

  // if (error) {
  //   console.log('error', error)
  // }

  const renderContent = (location) => {
    // if (!token) {
    //   console.log('no auth token')
    //   return (
    //     <Redirect
    //       to={{
    //         pathname: "/login",
    //         state: { from: location }
    //       }}
    //     />
    //   )
    // }

    // fetchCurrentUser()

    if (loading) {
      return <LinearProgress />
    } else if (data?.currentUser) {
      console.log('logged in user', data.currentUser)
      return children
    } else {
      console.log('not loading and no data REDIRECTING')
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location }
          }}
        />
      )
    }
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        renderContent(location)
      }
    />
  );
}

const AdminRoutes = () => {
  let match = useRouteMatch()

  const routes = [
    {
      path: '/listings',
      component: <AdminListings />
    },
  ]

  return (
    <Switch>
      {
        routes.map((route) => {
          return (
            <PrivateRoute key={route.path} path={`${match.url}${route.path}`}>
              { route.component }
            </PrivateRoute>
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
