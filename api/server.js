// const app = require("express")();
// const port = 5000;

// app.get('/', (req, res) => {
//     res.sendFile('index.html', {root: __dirname});
// });

// app.listen(port, () => {
//     console.log(`Listening to port ${port}`);
// })

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const { models, db } = require('./db');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context({req}) {
        //const isAuth = req.headers.authorization;
        const user = db.get('user').value();
        if (!user) throw new Error('not auth');
        return { models, db, user };
    }
})

server.listen().then(({ url }) => {
    console.log(`server running at ${url}`);
})