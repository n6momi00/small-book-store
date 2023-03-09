# Small book store project

## Settings up development enviroment

- Install [postgreSQL](https://www.postgresql.org/) if you don't already have it.
- `git clone https://github.com/n6momi00/small-book-store.git` to clone the repository.
- Create `.env` file for client and server. Use `.env.tmpl` file to copy the content. Fill in your database credentials and settings.
- In the root folder (this folder), use `npm run dev:install` to install all packages for client and server.
- In the root folder, use `npm run server:setup` for creating database, running migrations and seeds.
- In the root folder, use `npm run start` for starting both client and server.
