import { useLocalObservable } from 'mobx-react';
import React, { createContext, useContext } from 'react';
import BooksStore from './stores/BooksStore';

const BooksContext = createContext(null);

export const BooksProvider = ({ children }) => {
    const store = useLocalObservable(() => new BooksStore());
  return (
    <BooksContext.Provider value={store}>{children}</BooksContext.Provider>
  );
};

export const useBooksStore = () => useContext(BooksContext);
