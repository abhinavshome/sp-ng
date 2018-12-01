import { Http } from '@angular/http';
import { CartService } from './../../services/cart.service';
import { BookService } from './../../services/book.service';
import { Cart, Item } from './../../models/cart';
import { Book } from './../../models/book';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  cart: Cart;

  constructor(
    private bookService: BookService,
    private cartService: CartService,
    private http: Http
  ) {

  }

  ngOnInit() {
    this.bookService
      .getBooks()
      .subscribe(
      res => this.books = res.json(),
      err => console.log(err)
      );
    //console.log('Hello');

    //this.books = this.bookService.getBooks();
    this.cart = this.cartService.getCart();
  }

  rateUp(book: Book): void {
    this.bookService.rateUp(book).subscribe();
    
  }

  rateDown(book: Book): void {
    this.bookService.rateDown(book).subscribe();
  }

  addToCart(book: Book): void {
    this.cartService.addToCart(book);
  }

  addBook(book: Book): void {
    this.bookService
      .addBook(book)
      .subscribe(res => this.books.push(res.json()));
  }
}
