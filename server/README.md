# Project structure

This project uses following libraries:
- Express for handling HTTP requests and responses.
- Pg for PostgreSQL database management system.
- Knex for SQL query building and database schema management.

<br/>

| File or folder       | Description                                                                      |
| -------------------- | -------------------------------------------------------------------------------- |
| `src/index.js`       | The entry file for starting the server using the Express.                        |
| `src/knexfile.js`    | The file for Knex configurations for the PostgreSQL database.                    |
| `src/api`            | Contains all of the endpoints used by the server.                                |
| `src/database`       | Contains database configurations, migrations and seeds.                          |
| `src/handlers`       | Contains handlers that use the database models to handle requests and responses. |
| `src/middleware`     | Contains middleware functions to modify the request-response cycle.              |
| `src/models`         | Contains the database models used by the handlers to interact with the database. |
