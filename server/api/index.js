const express = require('express');

const router = new express.Router();

router.use('/books', require('./books'));

module.exports = router;