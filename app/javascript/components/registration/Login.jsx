import React, { useState } from "react"
import {
  useMutation,
  gql
} from "@apollo/client"
import { useHistory } from "react-router-dom"

import PageWrapper from '../shared/PageWrapper'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'

import CurrentUserBtn from "./CurrentUserBtn"

const LOGIN_MUTATION = gql`
  mutation userLogin($email: String!, $password: String!) {
    userLogin(email: $email, password: $password) {
      authenticatable {
        email
      }
      credentials {
        accessToken
        client
        uid
      }
    }
  }
`

const Login = () => {
  const [userLogin, { data, loading, error }] = useMutation(LOGIN_MUTATION)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleClick = () => {
    console.log('handle click', email, password)

    userLogin({ variables: { email, password }}).then(({data}) => {
      if (data?.userLogin?.credentials) {
        console.log('setting and pushing')
        localStorage.setItem('authToken', data.userLogin.credentials.accessToken)
        localStorage.setItem('authClient', data.userLogin.credentials.client)
        localStorage.setItem('authUid', data.userLogin.credentials.uid)
        console.log('auth token set', localStorage.getItem('authToken'))
        console.log('auth client set', localStorage.getItem('authClient'))
        console.log('auth uid set', localStorage.getItem('authUid'))
        history.push('/admin/listings')
      }
    })
  }

  // if (data?.userLogin?.credentials) {
  //   localStorage.setItem('authToken', data.userLogin.credentials.accessToken)
  //   localStorage.setItem('authClient', data.userLogin.credentials.client)
  //   localStorage.setItem('authUid', data.userLogin.credentials.uid)
  //   console.log('auth token set', localStorage.getItem('authToken'))
  //   console.log('auth client set', localStorage.getItem('authClient'))
  //   console.log('auth uid set', localStorage.getItem('authUid'))
  //   history.push('/admin/listings')
  // }

  return (
    <PageWrapper>
      <Card variant='outlined'>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Login
          </Typography>
          <Box>
            <TextField
              label="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <TextField
            label="Password"
            variant="outlined"
            onChange={(e) => setPassword(e.target.value)}
          />

        </CardContent>
        <CardActions>
          <Button
            size="small"
            onClick={() => handleClick()}
          >
            Login
          </Button>
          <CurrentUserBtn />
        </CardActions>
      </Card>
    </PageWrapper>
  )
}

export default Login
