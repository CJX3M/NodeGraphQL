const { gql } = require('apollo-server');

const typeDefs = gql`

    enum Animal {
        DOG
        CAT
    }

    type User {
        id: ID!
        username: String
        pets: [Pet]!
    }

    type Pet {
        id: ID!
        createdat: String!
        name: String!
        type: Animal
        breed: String!
        owner: User!
    }

    input UserInput {
        username: String
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

    input NewUserInput {
        username: String!
    }    

    type Query {
        # users(input: UserInput): [User]!
        user: User!
        pets(input: PetInput): [Pet]!
        pet(id: ID!): Pet!
    }

    type Mutation {
        addPet(input: NewPetInput): Pet!
        addUser(input: NewUserInput): User!
    }
`;

module.exports = typeDefs