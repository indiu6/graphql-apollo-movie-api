import { getMovies, getMovie, getSuggestions } from './db.js';

const resolvers = {
  Query: {
    movies: (_, { limit, rating }) => getMovies(limit, rating),
    movie: (_, { id }) => getMovie(id),
    suggestions: (_, { id }) => getSuggestions(id),
  },
};

export default resolvers;

//todo Step 5: Define a resolver

// Resolvers define the technique for fetching the types defined in the schema.
// This resolver retrieves books from the "books" array above.

// const resolvers = {
//   Query: {
//     books: () => books,
//   },
// };
