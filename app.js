const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js')
const helloFunctions = require('./functions/hello.js')

const app = express();

const root = {
	hello: helloFunctions.printHello(),
    /*
	allChampion: getAllChampions
    */
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
	rootValue: root,
	graphiql: true
}));

module.exports = app;
