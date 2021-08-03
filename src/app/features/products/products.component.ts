import { Component, OnInit } from '@angular/core';
import { IProduct } from 'src/app/model/products';

@Component({
  selector: 'app-products',
  template: `
    <div class="container">
        <h1>Our Wines</h1>
        <!-- <div *ngFor="let p of products">
          {{ p.name }}
        </div> -->
    </div>
  `,
  styles: [
  ]
})
export class ProductsComponent implements OnInit {
  // products: array<IProduct>;



/*   constructor(private s: ArchiveService) { 
    // products= this.listProducts;
  }
 */
  ngOnInit(): void {
  }

}
