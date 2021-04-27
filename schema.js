const { buildSchema } = require('graphql');

const schema = buildSchema(`
	type Query {
		champion(name: String!): Champion
		allChampion(name: [String!]):[Champion]
		hello: String
	}
	
	type Champion {
		id: ID!
		name: String!
		rarity: String
		faction: String
		rating: Int
		type: String
		element: String
		stats: Stats!
	}

	type Stats {
		health: Int!
		attack: Int!
		defense: Int!
		criticalRate: Int!
		criticalDamage: Int!
		speed: Int!
		resistance: Int!
		accuracy: Int!
	}
`)

module.exports = schema