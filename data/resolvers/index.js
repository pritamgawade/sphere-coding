const { getUser } = require('./handleUser');


const resolvers = {
  Query: {
    user(parent, args, context, info) {
      return getUser(context); 
    }
  },
};

module.exports = [ resolvers ];
