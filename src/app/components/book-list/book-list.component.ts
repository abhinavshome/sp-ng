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
    private cartService: CartService
  ) {
    
  }

  ngOnInit() {
    this.books = this.bookService.getBooks();
    this.cart = this.cartService.getCart();
  }

  rateUp(book: Book): void {
    this.bookService.rateUp(book);
  }

  rateDown(book: Book): void {
    this.bookService.rateDown(book);
  }

  addToCart(book: Book): void {
    this.cartService.addToCart(book);
  }
}
