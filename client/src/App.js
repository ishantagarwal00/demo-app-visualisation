import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import './App.css';
import Signup from './pages/Signup/signup';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql', // Replace with your GraphQL server URL
  cache: new InMemoryCache(),
});


function App() { 
  return (
    <ApolloProvider client={client}>
    <div className="App">
      <Signup />
    </div>
    </ApolloProvider>
  );
}

export default App;
