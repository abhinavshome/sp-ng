import { Book } from './../models/book';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];

  constructor() {
    console.log('book service created');
    this.books = [
      new Book(
        'The Alchemist',
        'Paulo Cohelo',
        22,
        3
      ),
      new Book(
        '4 hour work week',
        'Tim Ferris',
        32,
        5
      ),
      new Book(
        '5 point someone',
        'Chetan Bhagar',
        11,
        2
      ),
      new Book(
        'One night at call center',
        'Chetan Bhagat',
        24,
        1
      )];
  }

  getBooks(): Book[] {
    return this.books;
  }

  rateUp(book: Book) {
    if (book.rating < 5)
      book.rating++;
  }

  rateDown(book: Book) {
    if (book.rating > 1)
      book.rating--;
  }

  addBook(book: Book) {
    this.books.unshift(book);
  }
}
