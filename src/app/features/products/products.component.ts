import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, startWith } from 'rxjs/operators';
import { ArchiveService } from 'src/app/archive.service';
import { IProduct } from 'src/app/model/products';

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


  categoryForm: FormGroup = new FormBuilder().group({
    category: ['']
  })

  nameForm: FormGroup = new FormBuilder().group({
    inputFilter: ['']
  })
  name: any;



  constructor(private archiveService: ArchiveService) { }

  ngOnInit(): void {
    this.sub = this.archiveService.getProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: err => this.errorMessage = err
    });
  }

  performFilter(selectBy: string, textBox: string): void {
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
    let value = (this.categoryForm.get('category') || {}).value;
    this.performFilter(value, '');
    console.log('value=', value);
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  filterName() {
    if (this.name != "") {
      this.filteredProducts = this.filteredProducts.filter(res => {
        return res.name.toLocaleLowerCase().match(this.name?.toLocaleLowerCase())
      });
    }
    else if (this.name == "") {
      this.ngOnInit();
    }
  }
}
