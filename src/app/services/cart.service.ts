import { Book } from './../models/book';
import { Cart, Item } from './../models/cart';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart;

  constructor() {
    this.cart = new Cart();
    this.cart.items = [];
    this.cart.totalPrice = 0;
  }

  getCart(): Cart {
    return this.cart;
  }

  addToCart(book: Book) {
    let item: Item = new Item(book.title, book.price, 1);
    let i: Item;
    i = this.cart.items.find(function (e) {
      return e.name == item.name;
    });
    if (i) {
      i.qty++;
    } else {
      this.cart.items.push(item);
    }
    this.cart.totalPrice += item.price;
  }
}
