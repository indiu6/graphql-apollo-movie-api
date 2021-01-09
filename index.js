// apollo-server == a core library for Apollo Server itself, which helps you define the shape of your data and how to fetch it.
// graphql == a library used to build a GraphQL schema and execute queries against it.

//todo Step 6: Create an instance of ApolloServer
// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.

import { ApolloServer } from 'apollo-server';
import typeDefs from './graphql/schema.js';
import resolvers from './graphql/resolvers.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
