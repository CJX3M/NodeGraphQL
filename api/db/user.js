const nanoid = require('nanoid')

const createUserModel = db => {
    return {

        findOne(filter) {
            return db.get('user')
                .find(filter)
                .value()
        },

        create(user) {
            const newUser = { id: nanoid(), createdat: Date.now(), ...user };

            db.get('user')
                .push(newUser)
                .write();
            
            return newUser;
        }
    }
}

module.exports = createUserModel;