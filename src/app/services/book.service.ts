import { Http } from '@angular/http';
import { Book } from './../models/book';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: Book[];
  private url = 'http://localhost:3000/books';

  constructor(private http: Http) {
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
    return this.http.get(this.url);
  }

  rateUp(book: Book) {
    if (book.rating < 5)
      book.rating++;
    return this.http.put(this.url + '/' + book.id, book);
  }

  rateDown(book: Book) {
    if (book.rating > 1)
      book.rating--;
    return this.http.put(this.url + '/' + book.id, book);
  }

  addBook(book: Book) {
    return this.http.post(this.url, book);
  }
}
