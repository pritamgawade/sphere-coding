const { getUser, getUsers } = require('./handleUser');


const resolvers = {
  Query: {
    user(parent, args, context, info) {
      return getUser(args, context); 
    },
    users(parent, args, context, info) {
      return getUsers(context); 
    }
  },
};

module.exports = [ resolvers ];
