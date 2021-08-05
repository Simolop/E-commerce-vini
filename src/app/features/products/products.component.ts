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


export class ProductsComponent implements OnInit, OnDestroy {
  //products: IProduct[] | undefined;
  //URL = 'http://localhost:3000';
  //public isCollapsed: boolean = true;
  errorMessage: string = '';
  sub!: Subscription;

  private _listFilter: string = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string){
    this._listFilter=value;
    console.log('In setter:', value);
    this.filteredProducts = this.performFilter(value);
  }

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  constructor(private archiveService: ArchiveService) {
    //this.init();
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
        product.name.toLocaleLowerCase().includes(filterBy));
  }

  ngOnInit(): void {
    this.sub = this.archiveService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });       
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  /* init() {
    this.http.get<IProduct[]>(this.URL + '/products')
      .subscribe((res: any[] | undefined) => {
        this.products = res;
      });
  }  */
}


