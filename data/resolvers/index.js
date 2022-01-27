const { getUser, getUsers, updateUser } = require('./handleUser');


const resolvers = {
  Query: {
    user(parent, args, context, info) {
      return getUser(args, context); 
    },
    users(parent, args, context, info) {
      return getUsers(context); 
    },
  },

  Mutation: {
    updateUser(parent, args, context, info) {
      return updateUser(args, context); 
    }
  }
};

module.exports = [ resolvers ];
