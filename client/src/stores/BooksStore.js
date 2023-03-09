import { makeAutoObservable, runInAction, toJS } from 'mobx';
import {
  getBooks,
  createBook,
  updateBook,
  deleteBook
} from '../services/bookService';
import Book from './Book';

class BooksStore {
  books = [];
  selectedBook = null;

  constructor() {
    makeAutoObservable(this);
  }

  setSelectedBook = (bookId) => {
    const isSameBook = this.selectedBook?.id === bookId;
    this.selectedBook = !isSameBook ? toJS(this.books).find((book) => book.id === bookId) : null;
  };

  fetchBooks = async () => {
    try {
      const { data } = await getBooks();
      runInAction(() => {
        const arr = data.map(
          ({ id, title, author, description }) =>
            new Book(id, title, author, description)
        );
        this.books = arr;
      });
    } catch (error) {
      throw error;
    }
  };

  addBook = async (book) => {
    try {
      const { data } = await createBook(book);
      runInAction(() => {
        const { id, title, author, description } = { ...book, ...data };
        this.books.push(new Book(id, title, author, description));
        this.selectedBook = null;
      });
    } catch (error) {
      throw error;
    }
  };

  updateBook = async (book, updates) => {
    try {
      const { data } = await updateBook(book.id, updates);
      runInAction(() => {
        book.update(data);
      });
    } catch (error) {
      throw error;
    }
  };

  removeBook = async (book) => {
    try {
      await deleteBook(book.id);
      runInAction(() => {
        this.books = toJS(this.books).filter(({ id }) => id !== book.id);
        this.selectedBook = null;
      });
    } catch (error) {
      throw error;
    }
  };
}

export default BooksStore;
