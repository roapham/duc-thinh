const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');
const { makeExecutableSchema } = require('graphql-tools');
const { rootTypeDefs, rootResolvers } = require('./api/root/root.schema');
const { lenhTypeDefs, lenhResolvers } = require('./api/lenh/lenh.schema');
const { todoTypeDefs, todoResolvers } = require('./api/todo/todo.schema');

mongoose.connect('mongodb://localhost/test');

const schema = makeExecutableSchema({
  typeDefs: [
    rootTypeDefs,
    todoTypeDefs,
    lenhTypeDefs,
  ],
  resolvers: [
    rootResolvers,
    todoResolvers,
    lenhResolvers,
  ],
});

const server = new GraphQLServer({ schema });

mongoose.connection.once('open', () => {
  server.start(() => console.log('Server is running on localhost:4000'));
});
