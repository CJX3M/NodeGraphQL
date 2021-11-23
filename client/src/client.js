import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client";
import { ApolloLink } from "@apollo/client";
import { HttpLink } from "@apollo/client";
import { setContext } from "apollo-link-context";
import gql from "graphql-tag";

const link = new HttpLink({ uri: "http://localhost:4000/" });
const cache = new InMemoryCache();

const client = new ApolloClient({
    link,
    cache
});

const query = gql`
    {
        pets {
            id
            name
            type
            breed
        }
    }
`;

export default client;