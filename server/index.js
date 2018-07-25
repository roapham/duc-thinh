const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');
const gql = require('graphql-tag');
const { makeExecutableSchema } = require('graphql-tools');
const { lenhTypeDefs, lenhResolvers } = require('./api/lenh/lenh.schema.js');

mongoose.connect('mongodb://localhost/test');

const Todo = mongoose.model('Todo', {
  text: String,
  complete: Boolean,
});

const typeDefs = gql`
  type Query {
    todos: [Todo]
  }
  type Todo {
    id: ID!
    text: String!
    complete: Boolean!
  }
  type Mutation{
    createTodo(text: String!): Todo
    updateTodo(id: ID!, complete: Boolean): Boolean
    removeTodo(id: ID!): Boolean
  }
`;

const resolvers = {
  Query: {
    todos: () => Todo.find(),
  },
  Mutation: {
    createTodo: async (_, { text }) => {
      const todo = new Todo({ text, complete: false });
      await todo.save();
      return todo;
    },
    updateTodo: async (_, { id, complete }) => {
      await Todo.findByIdAndUpdate(id, { complete });
      return true;
    },
    removeTodo: async (_, { id }) => {
      await Todo.findByIdAndRemove(id);
      return true;
    },
  },
};

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, lenhTypeDefs],
  resolvers: [resolvers, lenhResolvers],
});

const server = new GraphQLServer({ schema });

mongoose.connection.once('open', () => {
  server.start(() => console.log('Server is running on localhost:4000'));
});
