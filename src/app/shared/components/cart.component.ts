import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-cart',
  template: `
    <div class="container">
      <h1>Your Cart</h1>
      <p>Your products list:</p>
      <div>
          Add quantity 
          <button class="btn btn-primary mx-2" style="background-color: #275572">
            <i class="fa fa-minus"></i>
              </button>
              <span>{{count}}</span>
              <button class="btn btn-primary mx-2" style="background-color: #275572" (click)="addQuantity()">
                <i class="fa fa-plus"></i>
              </button>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class CartComponent implements OnInit {

  clickEventSubscription: Subscription | undefined;

  constructor(private sharedService: SharedService) { 
    this.clickEventSubscription = this.sharedService.getClickEvent().subscribe(()=>{
      this.countFunction();
    });
  }

  count: number = 0;
  countFunction(){
    this.count += 1;
  }


  addQuantity(){
    this.sharedService.addClickEvent();
  }

  ngOnInit(): void {
  }

}
