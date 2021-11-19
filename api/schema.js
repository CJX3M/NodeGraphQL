const { gql } = require('apollo-server');

const typeDefs = gql`

    enum Animal {
        DOG
        CAT
    }

    type User {
        id: ID!
        username: String
    }

    type Pet {
        id: ID!
        createdat: String!
        name: String!
        type: Animal
        breed: String!
    }
    
    input PetInput {
        type: Animal
        name: String
        breed: String
    }

    input NewPetInput {
        type: Animal!
        name: String!
        breed: String
    }    

    type Query {
        pets(input: PetInput): [Pet]!
        pet(id: ID!): Pet!
    }

    type Mutation {
        addPet(input: NewPetInput): Pet!
    }
`;

module.exports = typeDefs