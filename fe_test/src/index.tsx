import React from "react";
import ReactDOM from "react-dom";
import { ApolloClient, InMemoryCache,  gql } from '@apollo/client';
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./app";

const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  });

ReactDOM.render(
<ApolloProvider client={client}>
    <App/>
</ApolloProvider>
    ,
    document.getElementById("root")
);