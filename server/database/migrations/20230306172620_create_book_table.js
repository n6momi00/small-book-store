const TABLE_NAME = 'book';

exports.up = function(knex) {
  return knex.schema.createTable(TABLE_NAME, (table) => {
    table.increments('id');
    table.string('title', 255).notNullable();
    table.string('author', 255).notNullable();
    table.string('description', 1000).notNullable();
    /* table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now()); */
  });
};

exports.down = function(knex) {
    return knex.schema.dropTable(TABLE_NAME);
};
