import React from "react"
import {
  useQuery,
  gql
} from "@apollo/client"
import PageWrapper from '../shared/PageWrapper'
import Typography from '@mui/material/Typography'

const LISTINGS_QUERY = gql`
  query listings($query: String, $first: Int, $cursor: String) {
    listings(query: $query, first: $first, after: $cursor) {
      pageInfo {
        endCursor
        startCursor
        hasNextPage
      }
      edges {
        node {
          id
          name
          street
          city
          zipcode
          state
        }
      }
    }
  }
`

const AdminListings = () => {
  const { loading, data, refetch, fetchMore } = useQuery(LISTINGS_QUERY, {
    variables: {
      first: 9
    },
    notifyOnNetworkStatusChange: true,
  })

  let listings = []

  if (data) {
    listings = data.listings.edges.map((e) => e.node)
  }

  return (
    <PageWrapper>
      <Typography variant='h2' color='textPrimary'>Admin Listings</Typography>
      {
        listings.map((listing) => {
          return (
            <h1 key={listing.name}>{listing.name}</h1>
          )
        })
      }
    </PageWrapper>
  )
}

export default AdminListings
