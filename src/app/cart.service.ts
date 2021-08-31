import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { IProduct } from './model/products';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  
    products: IProduct[]= [];

    private subject= new Subject<any>();

    constructor() {
        this.products = [];
    }
    // add item event
    addItemEvent(){
        this.subject.next();
    }
    // item from cart
    getItemEvent():Observable<any> {
        return this.subject.asObservable();
    }

    // add to cart
    addToCart(product: IProduct) {
        this.products.push(product);
    }

    getProducts() {
      return this.products;
    }

    removeItemCart(product: IProduct) {
      this.products.map((a: any, index: any)=>{
        if(product.id === a.id){
          this.products.splice(index,1);
        }
      })
    }

  }