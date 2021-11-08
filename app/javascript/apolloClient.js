import {
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from "@apollo/client"
import { relayStylePagination } from "@apollo/client/utilities"
import { setContext } from '@apollo/client/link/context';

const link = createHttpLink({
  uri: '/graphql',
  credentials: 'same-origin'
})

const authLink = setContext((_, { headers }) => {

  const token = localStorage.getItem('authToken')
  const client = localStorage.getItem('authClient')
  const uid = localStorage.getItem('authUid')

  console.log('token, client, uid', token, client, uid)

  return {
    headers: {
      ...headers,
      "access-token": token ? token : "",
      client: client ? client : "",
      uid: uid ? uid : ""
    }
  }
});

const cache = new InMemoryCache({
    typePolicies: {
    Query: {
      fields: {
        listings: relayStylePagination()
      },
    },
  },
})

const client = new ApolloClient({
  cache,
  link: authLink.concat(link)
})

export default client


