const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js')

const app = express();

const root = {
	hello: () => 'hello world'
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
