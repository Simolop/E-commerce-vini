import { Component,OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/cart.service';
import { IProduct } from 'src/app/model/products';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-cart',
  template: `
  <ng-container *ngIf="products.length ==0">
    <div class="container">
    <router-outlet></router-outlet>
 
      <div class="d-flex justify-content-center mt-5">
        <div class="text-center card" style="width: 25rem; height: 14rem">
            <div class="card-body">
              <h2 class="mb-5">Your cart is empty</h2>
                <button class="btn btn-primary" style="background-color: #275572" 
                routerLink='/products' routerLinkActive="active">
                  Go to products
              </button>
            </div>
          </div>
      </div>
      
    </div>
  </ng-container>

  <ng-container *ngIf="products.length !=0">
  <div class="container">
     <router-outlet></router-outlet>
      <h1 class="mt-3 mb-3">Your Cart</h1>
      <div class="d-flex justify-content-evenly flex-wrap">
        <div class="card me-3 mb-3" style="width: 18rem;" *ngFor="let p of products; index as i">
          <div class="card-body text-center">
            <img [src]="p.image" [width]="150"  class="card-img-top" [alt]="p.name"> 
            <h5 class="card-title">{{ p.name }}</h5>
            <p class="card-text">Price: {{ p.price }} €</p>
            <p class="card-text">Category: {{ p.category }}</p>
            <p class="card-text">Quantity: {{ p.quantity }}</p>
            <a routerLink='/cart' class="btn btn-success me-3">
              <i class="fa fa-check-circle"></i>
            </a>
            <button routerLink='/cart' (click)="removeItem(i)" class="btn btn-danger">
              <i class="fa fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </ng-container>
    
  `,
  styles: [ 
    `.card-img, .card-img-bottom, .card-img-top {
      width: 100px;
      height: 150px;
    } `
  ]
})

export class CartComponent implements OnInit {

  products : IProduct[] = [];

  product: any;
  
  //products = this.sharedService.getProducts();
  clickEventSubscription: Subscription | undefined;
  count: number = 0;

  constructor(private cartService: CartService, private sharedService: SharedService) {
    this.clickEventSubscription = this.cartService.getItemEvent().subscribe(()=>{
      this.countFunction();
    });
  }
  countFunction() {
    this.count += 1;
  }

  addQuantity(){
    this.cartService.addItemEvent();
  }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.products = this.sharedService.getProducts();
    console.log(this.products);
  }

  /* removeItem(product: IProduct){
    this.cartService.removeItemCart(product);
    console.log(product)
  }  */

  removeItem(del: any) {
    this.products.splice(del, 1);
  }

  
}
