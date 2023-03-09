const express = require('express');
const bookHandler = require('../../handlers/book');

const router = new express.Router();

router.get('/', bookHandler.getAllBooks);

router.post('/', bookHandler.createBook);

router.put('/:id(\\d+)', bookHandler.updateBook);

router.delete('/:id(\\d+)', bookHandler.deleteBook);

module.exports = router;
