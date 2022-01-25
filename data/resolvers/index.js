const { getUser } = require('./handleUser');


const resolvers = {
  Query: {
    user(parent, args, context, info) {
      return getUser(parent, args, context, info); 
    }
  },
};

module.exports = [ resolvers ];
