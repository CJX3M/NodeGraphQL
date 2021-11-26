import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { ApolloLink } from "@apollo/client";
import { onError } from '@apollo/client/link/error'
import { HttpLink } from "@apollo/client";
import { setContext } from "apollo-link-context";
import gql from "graphql-tag";

const httpLink = new HttpLink({ uri: "http://localhost:4000/" });
const cache = new InMemoryCache();

const errorLink = onError(({ graphQLErrors }) => {
  if (graphQLErrors) graphQLErrors.map(({ message }) => console.log(message))
})

const client = new ApolloClient({
    link: ApolloLink.from([errorLink, httpLink]),
    cache
});

// const query = gql`
//     {
//         pets {
//             name
//             breed
//             type
//         }
//     }
// `

// client.query({ query });

export default client;