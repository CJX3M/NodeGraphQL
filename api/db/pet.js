const { nanoid } = require('nanoid')

const createPetModel = db => {
    return {
        findMany(filter) {
            return db.get('pet')
                .filter(filter)
                .orderBy(['createdat'], ['desc'])
                .value()
        },

        findOne(filter) {
            return db.get('pet')
                .find(filter)
                .value()
        },

        create(pet) {
            const newPet = { id: nanoid(), createdat: Date.now(), ...pet };

            db.get('pet')
                .push(newPet)
                .write();
            
            return newPet;
        }
    }
}

module.exports = createPetModel;