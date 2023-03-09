import { makeAutoObservable } from 'mobx';

export default class Book {
  id = '';
  title = '';
  author = '';
  description = '';

  constructor(id, title, author, description) {
    makeAutoObservable(this, {
      id: false
    });

    this.id = id;
    this.title = title;
    this.author = author;
    this.description = description;
  }

  getAsJson = () => {
    return {
      id: this.id,
      title: this.title,
      author: this.author,
      description: this.description
    };
  }

  update = ({ title, author, description }) => {
    if (title) this.title = title;
    if (author) this.author = author;
    if (description) this.description = description;
  }
}
