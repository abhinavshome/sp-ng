import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() cart;

  constructor() { }

  ngOnInit() {
  }

}
