import React from 'react';
import { ListGroup } from 'react-bootstrap';
import BookItem from './BookItem';
import LoadingOverlay from './LoadingOverlay';

const BookList = ({ isFetching, books, selectedBookId, onSelectBook }) => {
  const bookItems = books.map((book) => (
    <BookItem
      key={book.id}
      book={book}
      isActive={selectedBookId === book.id}
      onSelect={() => onSelectBook(book.id)}
    />
  ));

  return (
    <div className='book-list-container'>
      {isFetching && <LoadingOverlay />}
      <ListGroup className='book-list-group mb-3 border'>
        {bookItems}
      </ListGroup>
    </div>
  );
};

export default BookList;
