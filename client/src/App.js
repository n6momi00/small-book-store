import React, { useEffect, useState } from 'react';
import { Alert, Col, Container, Row } from 'react-bootstrap';
import BookForm from './components/BookForm';
import BookList from './components/BookList';
import { useBooksStore } from './BooksContext';
import { toJS } from 'mobx';
import { observer } from 'mobx-react';
import { isNullOrEmpty } from './utils/general';
import './styles/book.css';

const App = observer(() => {
  const [isFetching, setIsFetching] = useState(false);
  const [fetchBooksError, setFetchBooksError] = useState('');
  const { books, selectedBook, fetchBooks, setSelectedBook, addBook, updateBook, removeBook } = useBooksStore();

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        setFetchBooksError('');
        setIsFetching(true);
        await fetchBooks();
        setIsFetching(false);
      } catch (error) {
        setIsFetching(false);
        setFetchBooksError(error.message);
      }
    };

    fetchAllBooks();
  }, []);

  return (
    <Container className='mt-3'>
      <Row>
        <Col>
          <BookForm
            book={selectedBook}
            onCreate={addBook}
            onUpdate={updateBook}
            onDelete={removeBook}
          />
        </Col>
        <Col>
          <BookList
            isFetching={isFetching}
            books={toJS(books)}
            selectedBookId={selectedBook?.id}
            onSelectBook={setSelectedBook}
          />
          {!isNullOrEmpty(fetchBooksError) && (
            <Alert className='mt-3' variant='danger'>
              {fetchBooksError}
            </Alert>
          )}
        </Col>
      </Row>
    </Container>
  );
})

export default App;
