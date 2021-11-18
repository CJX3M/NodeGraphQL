module.exports = {
    Query: {
        pets(_, { type }, { models }, ) {
            return models.Pet.findMany()
        }
    },
    // Mutation: {

    // },
    Pet: {
    
    },
    User: {

    }
}