// const people = require('./db').default;
import { getMovies } from './db.js';

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
  },
};

// module.exports = resolvers;
export default resolvers;

//todo Step 5: Define a resolver

// Resolvers define the technique for fetching the types defined in the schema.
// This resolver retrieves books from the "books" array above.

// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };
