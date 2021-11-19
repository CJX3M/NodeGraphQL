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
    
    input PetInput {
        type: String
        name: String
        breed: String
    }

    type Query {
        pets(input: PetInput): [Pet]!
        pet(id: ID!): Pet!
    }
`;

module.exports = typeDefs