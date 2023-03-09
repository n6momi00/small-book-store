import React from 'react';
import { Col, ListGroupItem, Row } from 'react-bootstrap';
import { longStringFormat } from '../utils/general';

export default function BookItem({ book, isActive, onSelect }) {
  const { title, author } = book;

  function onEnterPressed(e) {
    if (e.key === 'Enter') onSelect();
  }

  return (
    <ListGroupItem className='book-item p-0' onClick={onSelect} active={isActive}>
      <Col className='p-3' tabIndex={0} onKeyUp={onEnterPressed}>
        <Row className='my-1'>
          <div>
            <span className='fw-bold'>Title:</span> {longStringFormat(title) || '-'}
          </div>
        </Row>
        <Row className='my-1'>
          <div>
            <span className='fw-bold'>Author:</span> {longStringFormat(author) || '-'}
          </div>
        </Row>
      </Col>
    </ListGroupItem>
  );
}
