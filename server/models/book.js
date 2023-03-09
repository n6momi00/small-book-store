const knex = require('../database/knex');

const Book = {
  /**
   * Fetches all books
   * @returns {Array<object>} books
   */
  getAll: async function () {
    const books = await knex('book')
      .select(['id', 'title', 'author', 'description']);

    return books;
  },

  /**
   * Create a new book
   * @param {object} book
   * @returns {number} Created book id
   */
  create: async function (book) {
    const bookId = await knex('book')
      .insert({...book})
      .returning('id');

    return bookId[0];
  },

  /**
   * Update book
   * @param {number} id
   * @param {object} updates
   * @returns {object} Updated book
   */
  update: async function (id, updates) {
    const books = await knex('book')
      .where('id', id)
      .update(updates)
      .returning(['id', 'title', 'author', 'description']);

    return books[0];
  },

  /**
   * Delete book
   * @param {number} id
   * @returns {number} Deleted book id
   */
  delete: async function (id) {
    return await knex('book')
      .where('id', id)
      .del();
  }
};

module.exports = Book;
