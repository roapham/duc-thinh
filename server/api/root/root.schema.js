const gql = require('graphql-tag');

const rootTypeDefs = gql`
  type Query {
    hello: String
  }
  type Mutation {
    hi: Boolean
  }
`;

const rootResolvers = {
  Query: {
    hello: () => 'hello world',
  },
  Mutation: {
    hi: () => true,
  },
};

module.exports = { rootTypeDefs, rootResolvers };
