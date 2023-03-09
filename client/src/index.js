import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/global.css';
import App from './App';
import { BooksProvider } from './BooksContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BooksProvider>
    <App />
  </BooksProvider>
);
