const express = require('express');
const mongoose = require('mongoose');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema.js');
const helloFunctions = require('./functions/hello.function.js');
const userFunction = require('./functions/users.functions');

const app = express();
const mongoUrl = process.env.MONGO_URL
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
var db = mongoose.connection;

// Checks database connection and throws an error if connection was not succesfull
if(!db){
	throw new Error('Error connecting to database')
}

const root = {
	hello: helloFunctions.printHello,
	allUsers: userFunction.getAllUsers,
}

app.use('/graphql', graphqlHTTP({
    schema: schema,
	rootValue: root,
	graphiql: true
}));

module.exports = app;

