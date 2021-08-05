import { Injectable } from '@angular/core';
import { IProduct } from './model/products';
import { HttpClient, HttpErrorResponse } from "@angular/common/http"
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ArchiveService {
  //listProducts:Array<IProduct>;
  private productUrl = '/api/products/products';

  constructor(private http: HttpClient) { 
    //this.listProducts = [];
  }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl).pipe(
        tap(data => console.log('All: ', JSON.stringify(data))),
        catchError(this.handleError)
    );
  } 

  private handleError(err: HttpErrorResponse) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
        errorMessage = `An error occurred: ${err.error.message} `;
    } else {
        errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(errorMessage);
  }
  

  
}
