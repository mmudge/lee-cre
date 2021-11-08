import React from "react"
import {
  useLazyQuery,
  gql
} from "@apollo/client"

import Button from '@mui/material/Button';

const BLA = gql`
  query currentUser {
    currentUser {
      id
      email
    }
  }
`

const CurrentUserBtn = () => {
    const [loadUser, { called, loading, data }] = useLazyQuery(BLA)

  const handleClick = () => {
    loadUser()
  }


  return (

    <Button
      size="small"
      onClick={() => handleClick()}
    >
      current user
    </Button>

  )
}

export default CurrentUserBtn
