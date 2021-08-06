import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Subscription } from 'rxjs';
import { IProduct } from 'src/app/model/products';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html' ,
  styles: [`
    .bg {
      background-color: #275572;
     }
     `
  ]
})
export class NavbarComponent implements OnInit {
 
  clickEventSubscription: Subscription | undefined;

  constructor(private sharedService: SharedService) { 
    this.clickEventSubscription = this.sharedService.getClickEvent().subscribe((data: IProduct[]) =>{
      this.countFunction();
      console.log(data);
    });
  }

  count: number = 0;
  countFunction(){
    this.count += 1;
  }

  ngOnInit(): void {
  }
}
