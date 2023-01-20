import { getAllBooks, getBook } from './service';
import { getAuthorById } from '../author/service';

const resolvers = {
  Query: {
    books: () => getAllBooks(),
    book: (parent, args, contextValue, info) => getBook(args.id),
  },
  Book: {
    author(parent) {
      return getAuthorById(parent.author);
    },
  },
};

export default resolvers;
