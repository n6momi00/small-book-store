const Book = require('../models/book');

async function getAllBooks(req, res, next) {
  try {
    const books = await Book.getAll();
    res.status(200).json({ data: books });
  } catch (error) {
    next(error);
  }
}

async function createBook(req, res, next) {
  try {
    const book = req.body;
    const bookId = await Book.create(book);
    res.status(201).json({ data: bookId });
  } catch (error) {
    next(error);
  }
}

async function updateBook(req, res, next) {
  try {
    const bookId = Number(req.params.id);
    const updates = req.body;
    const book = await Book.update(bookId, updates);
    res.status(200).json({ data: book });
  } catch (error) {
    next(error);
  }
}

async function deleteBook(req, res, next) {
  try {
    const bookId = Number(req.params.id);
    await Book.delete(bookId);
    res.status(204).end();
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllBooks,
  createBook,
  updateBook,
  deleteBook
};
