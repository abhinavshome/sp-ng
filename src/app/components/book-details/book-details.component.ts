import { Book } from './../../models/book';
import { BookService } from './../../services/book.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {
  book$;//: Observable<Book>;
  constructor(
    private route: ActivatedRoute, 
    private bookService: BookService
  ) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.book$ = this.bookService.getBook(id);
  }

}
