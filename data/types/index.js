const { gql } = require('apollo-server');

const typeDefs = gql`
  type Mutation {
    createUser(first_name: String!, last_name: String!, email: String!, country: String): User
    updateUser(id: ID!, first_name: String!, last_name: String!, email: String!, country: String): User
  }

  type User {
    id: ID! 
    first_name: String
    last_name: String
    email: String
    country: String
  }

  type Query {
    users: [User]
    user(id: ID, email: String): User
  }
`;

module.exports = [ typeDefs ];
