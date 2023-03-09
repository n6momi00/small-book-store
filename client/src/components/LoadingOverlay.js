import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function LoadingOverlay() {
  return (
    <div className='loading-overlay'>
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>
          Loading...
        </span>
      </Spinner>
    </div>
  );
}
