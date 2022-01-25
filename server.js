// quick fastify / apollo server
// https://www.apollographql.com/docs/apollo-server/integrations/middleware/#apollo-server-fastify
const config = require('./config');
const { ApolloServer } = require('apollo-server-fastify');
const { ApolloServerPluginDrainHttpServer } = require('apollo-server-core');
const typeDefs  = require('./data/types/');
const resolvers = require('./data/resolvers/');

const fastify = require('fastify')({logger: true});
const helmet = require('fastify-helmet');

const env = config.get('env');
const serviceListeningPort = config.get('port');

function fastifyAppClosePlugin(app) {
  return {
    async serverWillStart() {
      return {
        async drainServer() {
          await app.close();
        },
      };
    },
  };
}

async function startApolloServer(typeDefs, resolvers) {
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      fastifyAppClosePlugin(fastify),
      ApolloServerPluginDrainHttpServer({ httpServer: fastify.server }),
    ],
    // context: ({ req, res }) => {
    //   //Invaluable for debugging
    //   if (env === 'development') {
    //     console.log("GOT A REQUEST: ", req);
    //   }

    //   return {
    //     source: req.headers.referer || 'unknown',
    //     header: req.headers,
    //     query: req.body.query,
    //   };
    // },
  });

  await apolloServer.start();
  fastify.register(apolloServer.createHandler())
    .register(helmet)
    .register(require('fastify-sensible'))
    .register(require('fastify-healthcheck'))
    .register(require('fastify-formbody'))
    .register(require('fastify-knex'), {
      client: 'pg',
      debug: (config.get('env') === 'development'),
      connection: config.get('db')
    })
  await fastify.listen(serviceListeningPort);
  console.log(`🚀 Server ready at http://localhost:${serviceListeningPort}${apolloServer.graphqlPath}`);
}

startApolloServer(typeDefs, resolvers);
