import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { IProduct } from './model/products';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  items: IProduct[] = [];

  private subject = new Subject<IProduct[]>();
  
  addClickEvent(product: IProduct) {
    this.items.push(product)
    this.subject.next(this.items);
  }

  getClickEvent():Observable<any> {
    return this.subject.asObservable();
  }

  constructor() { }
}
