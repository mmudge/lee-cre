import {
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from "@apollo/client"
import { relayStylePagination } from "@apollo/client/utilities"
import { setContext } from '@apollo/client/link/context';

const authToken = localStorage.getItem('authToken')

console.log('auth token', authToken)

const link = createHttpLink({
  uri: '/graphql',
  credentials: 'same-origin'
})


    // console.log('auth token set', localStorage.getItem('authToken'))
    // console.log('auth client set', localStorage.getItem('authClient'))
    // console.log('auth uid set', localStorage.getItem('authUid'))

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('authToken')
  const client = localStorage.getItem('authClient')
  const uid = localStorage.getItem('authUid')
  // return the headers to the context so httpLink can read them
  // return {
  //   headers: {
  //     ...headers,
  //     authorization: token ? `Bearer ${token}` : "",
  //   }
  // }
    return {
    headers: {
      ...headers,
      "access-token": token ? token : "",
      client: client ? client : null,
      uid: uid ? uid : null
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


