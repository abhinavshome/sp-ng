import { Item } from './../models/cart';
import { Book } from './../models/book';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css']
})
export class BookItemComponent implements OnInit {
  @Input() book : Book;
  @Output() onRateUp = new EventEmitter();
  @Output() onRateDown = new EventEmitter();
  @Output() onAddToCart = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onRateUpBtnClick() {
    this.onRateUp.emit();
  }

  onRateDownBtnClick() {
    this.onRateDown.emit();
  }

  onAddToCartBtnClick() {
    let item : Item = new Item(this.book.title, this.book.price, 1);
    this.onAddToCart.emit(item);
  }
}