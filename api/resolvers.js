module.exports = {
    Query: {
        // users(_, { input }, { models }) {
        //     return models.User.findMany(input)
        // },
        user(_, __, { models }) {
          return models.User.findOne()
        },
        pets(_, { input }, { models } ) {
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
        owner(pet, _, { models }) {
            return models.User.findOne({ id: pet.owner });
        }
    },
    User: {
        pets(user, _, { models }) {
            return models.Pet.findMany({owner: user.id})
        }
    }
}