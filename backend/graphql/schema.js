const { ApolloServer, gql } = require('apollo-server-express')
const resolvers = require('./resolver')

const {
    Post
} = require('../models')

const schemaQuery = gql`

    type Post {
        message: String
    }

    type PostPaginate {
        posts: [Post],
        total: Int
    }

    input PostPageInput {
        page: Int!
        limit: Int!
    }

    input PostInput {
        message: String!
    }

    type Query {
        getPosts(input: PostPageInput, order: String):PostPaginate
    }

    type Mutation {
        CreatePost(input: PostInput): Boolean
    }
`

module.exports = new ApolloServer({
    typeDefs: [
        schemaQuery
    ],
    resolvers,
    playground: {
        endpoint: '/graphql'
    },
    context: {
        Post
    }
})