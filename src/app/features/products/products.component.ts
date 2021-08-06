import {Component, OnDestroy, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup } from '@angular/forms';
import {Subscription } from 'rxjs';

import { ArchiveService } from 'src/app/archive.service';
import { IProduct } from 'src/app/model/products';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styles: [
    `
    .form-control,.form-select{
      width: 200px;
      margin-right: 20px;
      margin-bottom: 20px;
    }`
  ]
})

export class ProductsComponent implements OnInit, OnDestroy {
  errorMessage: string = '';
  sub!: Subscription;
  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];

  categories: string[] = ['All', 'red wine', 'white wine', 'rose'];
  private _listFilter: string = '';

  quantity = 0;


  wineForm: FormGroup = new FormBuilder().group({
    name: [''],
    category: ['']
  })
  static quantity: any;
 
  constructor(private archiveService: ArchiveService, private formBuilder: FormBuilder, private sharedService: SharedService) { }

  ngOnInit(): void {
    this.sub = this.archiveService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

  performFilter(selectBy: string): void {
    this.filteredProducts = this.products.filter((item) => {
      if (selectBy != 'All') {
        return selectBy === item.category;
      }
      else {
        return this.products;
      }
    })
  }

  selectCategory() {
    let value = (this.wineForm.get('category') || {}).value;
    this.performFilter(value);
    console.log('value=', value);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  addQuantity(){
    this.sharedService.addClickEvent();
  }

}
