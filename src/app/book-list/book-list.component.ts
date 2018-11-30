import { Cart, Item } from './../models/cart';
import { Book } from './../models/book';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[];
  cart: Cart;

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

      this.cart = new Cart();
      this.cart.items = [];
      this.cart.totalPrice = 0;
  }
  
  rateUp(book: Book) : void {
    if(book.rating < 5)
      book.rating++;
  }

  rateDown(book: Book) : void {
    if(book.rating > 1)
      book.rating--;
  }

  addToCart(book: Book) : void {
    let item : Item = new Item(book.title, book.price, 1);
    let i : Item;
    i = this.cart.items.find( function (e) {
      return e.name == item.name;
    });
    if(i) {
      i.qty++;
    } else {
      this.cart.items.push(item);
    }
    this.cart.totalPrice += item.price;
  }
}
