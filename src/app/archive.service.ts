import { Injectable } from '@angular/core';
import { IProduct } from './model/products';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {
  listProducts:Array<IProduct>;

  // mettere user 

  constructor() { 
    this.listProducts = [];
  }
}
