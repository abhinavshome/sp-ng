import { Http } from '@angular/http';
import { Book } from './../models/book';
import { Injectable } from '@angular/core';
import { pipe, Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookService {
  private url = 'http://localhost:3000/books';

  constructor(private http: Http) {
  }

  getBooks() : Observable<Book[]>{
    return this.http
      .get<Book[]>(this.url)
      .pipe(
        map(res => res.json())
      )
      ;
  }

  getBook(id: number) {
    return this.http
      .get(this.url + '/' + id)
      .pipe(
        map(res => res.json())
      )
      ;
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
