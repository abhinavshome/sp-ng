import { Book } from './../../models/book';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Output() saveBtnClick = new EventEmitter();
  newBook: Book;
  constructor() { }

  ngOnInit() {
    this.newBook = new Book(null, null, null, 1);
  }

  handleSaveBtnClick(){
    //let book = Object.assign({}, this.newBook);
    this.newBook.price = +this.newBook.price;
    this.newBook.rating = +this.newBook.rating;
    this.saveBtnClick.emit(this.newBook);
    this.newBook = new Book(null, null, null, null);
  }

  // handleSaveBtnClick(
  //   title: HTMLInputElement,
  //   author: HTMLInputElement,
  //   price: HTMLInputElement,
  //   rating: HTMLInputElement,
  //   ) {
  //   let newBook = new Book(
  //     title.value, 
  //     author.value, 
  //     +price.value, 
  //     +rating.value
  //   );

  //   this.saveBtnClick.emit(newBook);

  // }

}
