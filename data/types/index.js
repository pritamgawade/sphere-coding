const { gql } = require('apollo-server');

const typeDefs = gql`
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
