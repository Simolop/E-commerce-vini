import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ArchiveService } from 'src/app/archive.service';
import { IProduct } from 'src/app/model/products';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
  ]
})

export class ProductsComponent implements OnInit, OnDestroy {
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
}
