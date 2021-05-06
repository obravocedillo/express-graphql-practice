const { buildSchema } = require('graphql');

const schema = buildSchema(`
	type Query {
		allUsers: [User!]
		hello: String
	}
	type Mutation {
		addRecipe(name: String!, ingredients: [Ingredients!], instructions: String! ): String!
	}
	type User {
		id: ID!
		name: String!
		email: String!
	}
	input Ingredients {
		name: String!,
		quantity: String!
	}
`)

module.exports = schema