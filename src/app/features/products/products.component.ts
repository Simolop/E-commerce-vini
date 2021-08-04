import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { ArchiveService } from 'src/app/archive.service';
import { IProduct } from 'src/app/model/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})


export class ProductsComponent  {
  products: IProduct[] | undefined;
  URL = 'http://localhost:3000';
  public isCollapsed: boolean = true;

  constructor(private http: HttpClient) {
    this.init();
  }
 /*  ngOnInit(): void {
    throw new Error('Method not implemented.');
  } */

  init() {
    this.http.get<IProduct[]>(this.URL + '/products')
      .subscribe((res: any[] | undefined) => {
        this.products = res;
      });
  }

}


/* export class ProductsComponent implements OnInit {
  products: Array<IProduct>;

  constructor(private s: ArchiveService) { 
    this.products = s.listProducts;
  }

  ngOnInit(): void {
  }

} */

/* export class ProductsComponent implements OnInit, OnDestroy {
  products: IProduct | undefined;
  listProducts: IProduct | undefined;

  imageWidth: number = 50;
  imageMargin: number = 2;
  errorMessage: string = '';
  sub!: Subscription;
  ArchiveService: any;

  constructor(private s: ArchiveService) { 
     this.products= this.listProducts;
  }

  ngOnInit(): void {
    this.sub = this.ArchiveService.getProducts().subscribe({
        next: (products: IProduct | undefined) => {
            this.products = products;
        },
        error: (err: string) => this.errorMessage = err
    });       
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
} */
