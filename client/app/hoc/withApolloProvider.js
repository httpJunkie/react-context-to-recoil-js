import React from 'react'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

const withApolloProvider = (WrappedComponent, graphqlEndpoint) => {
  const apolloClient = new ApolloClient({
    uri: graphqlEndpoint,
  })

  return (props) => (
    <ApolloProvider client={apolloClient}>
      <WrappedComponent {...props} wrappedBy={"withApolloProvider"} />
    </ApolloProvider>
  )
}

export default withApolloProvider