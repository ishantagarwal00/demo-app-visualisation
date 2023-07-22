import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import "./App.css";
import Signup from "./pages/Signup/signup";
import { Provider } from "react-redux";
import store from "./store/store.js";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <div className="App">
          <Signup />
        </div>
      </Provider>
    </ApolloProvider>
  );
}

export default App;
