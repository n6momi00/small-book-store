const TABLE_NAME = 'book';

const randomBooks = [
  {
    title: 'Random book 01',
    author: 'by Me',
    description: 'Lorem Ipsum'
  },
  {
    title: 'Random book 02',
    author: 'by Me',
    description: 'Lorem Ipsum'
  },
  {
    title: 'Random book 03',
    author: 'by Me',
    description: 'Lorem Ipsum'
  },
  {
    title: 'Random book 04',
    author: 'by Me',
    description: 'Lorem Ipsum'
  },
  {
    title: 'Random book 05',
    author: 'by Me',
    description: 'Lorem Ipsum'
  }
];

exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.raw(`TRUNCATE "${TABLE_NAME}" RESTART IDENTITY CASCADE`);

  return knex(TABLE_NAME).insert(randomBooks);
};
