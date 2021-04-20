import React from 'react'
import { ApolloProvider, InMemoryCache, ApolloClient } from '@apollo/client';

const withApolloProvider = (WrappedComponent, graphqlEndpoint) => {
  const apolloClient = new ApolloClient({
    uri: graphqlEndpoint,
    cache: new InMemoryCache()
  })

  return (props) => (
    <ApolloProvider client={apolloClient}>
      <WrappedComponent {...props} wrappedBy={"withApolloProvider"} />
    </ApolloProvider>
  )
}

export default withApolloProvider