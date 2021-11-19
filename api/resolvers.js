module.exports = {
    Query: {
        pets(_, { input }, { models }, ) {
            return models.Pet.findMany(input)
        },
        pet(_, { id }, { models }) {
            return models.Pet.findOne({ id })
        }
    },
    // Mutation: {

    // },
    Pet: {
    
    },
    User: {

    }
}