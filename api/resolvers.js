module.exports = {
    Query: {
        pets(_, { input }, { models }, ) {
            return models.Pet.findMany(input)
        },
        pet(_, { id }, { models }) {
            return models.Pet.findOne({ id })
        }
    },
    Mutation: {
        addPet(_, { input }, { models }) {
            const pet = models.Pet.create({ ...input });
            return pet;
        }
    },
    Pet: {
    
    },
    User: {

    }
}