const { buildSchema } = require('graphql');

const schema = buildSchema(`
	type Query {
		allUsers: [User!]
		hello: String
	}
	type User {
		id: ID!
		name: String!
		email: String!
	}
`)

module.exports = schema