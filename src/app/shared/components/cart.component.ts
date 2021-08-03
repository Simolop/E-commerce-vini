import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `
    <div class="container">
      <h1>Your Cart</h1>
      <p>Your products list:</p>
    </div>
  `,
  styles: [
  ]
})
export class CartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
