import Author from './types';

import authors from './data.json';

export const getAllAuthors = (): Author[] => {
  return authors;
};
export const getAuthorById = (id: string): Author | undefined => {
  return authors.find((author) => author.id === id);
};
