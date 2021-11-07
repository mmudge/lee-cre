import {
  ApolloClient,
  InMemoryCache,
  createHttpLink
} from "@apollo/client"
import { relayStylePagination } from "@apollo/client/utilities";

const link = createHttpLink({
  uri: '/graphql',
  credentials: 'same-origin'
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
  link
})

export default client


