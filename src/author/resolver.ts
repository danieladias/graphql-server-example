import { getAllAuthors, getAuthorById } from './service';

const resolvers = {
  Query: {
    authors: () => getAllAuthors(),
    author: (parent, args, contextValue, info) => getAuthorById(args.id),
  },
};

export default resolvers;
