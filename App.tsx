import React from 'react';
import {ApolloProvider} from 'react-apollo';
import Home from './src/scene/Home';
import ApolloClient, {InMemoryCache} from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/',
  cache: new InMemoryCache(),
});

const InitializeApplication = () => (
  <ApolloProvider client={client}>
    <Home />
  </ApolloProvider>
);

export default InitializeApplication;
