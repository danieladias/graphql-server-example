import { mergeResolvers } from '@graphql-tools/merge';

import authorsResolvers from './author/resolver';
import booksResolvers from './book/resolver';

const resolvers = mergeResolvers([authorsResolvers, booksResolvers]);
export default resolvers;
