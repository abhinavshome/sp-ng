import { Book } from './../models/book';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];

  constructor() {

  }

  ngOnInit() {
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
  
  rateUp(book: Book) : void {
    if(book.rating < 5)
      book.rating++;
  }

  rateDown(book: Book) : void {
    if(book.rating > 1)
      book.rating--;
  }
}
