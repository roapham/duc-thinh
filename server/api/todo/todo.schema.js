const gql = require('graphql-tag');
const Todo = require('./todo.model');

const todoTypeDefs = gql`
  extend type Query {
    todos: [Todo]
  }
  type Todo {
    id: ID!
    text: String!
    complete: Boolean!
  }
  extend type Mutation{
    createTodo(text: String!): Todo
    updateTodo(id: ID!, complete: Boolean): Boolean
    removeTodo(id: ID!): Boolean
  }
`;

const todoResolvers = {
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

module.exports = { todoTypeDefs, todoResolvers };
