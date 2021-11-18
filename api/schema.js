const { gql } = require('apollo-server');

const typeDefs = gql`
    type User {
        id: ID!
        username: String

    }

    type Pet {
        id: ID!
        createdat: String!
        name: String!
        type: String!
        breed: String!
    }
    
    type Query {
        pets(type: String): [Pet]!
    }
`;

module.exports = typeDefs