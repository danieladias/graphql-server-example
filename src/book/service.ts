import { Book } from './types';

import books from './data.json';

export const getAllBooks = (): Book[] => {
  return books;
};
export const getBook = (id: string): Book | undefined => {
  return books.find((book) => book.id === id);
};
