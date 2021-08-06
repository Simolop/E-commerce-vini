import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Subscription } from 'rxjs';

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
    this.clickEventSubscription = this.sharedService.getClickEvent().subscribe(()=>{
      this.countFunction();
    });
  }

  count: number = 0;
  countFunction(){
    this.count += 1;
  }

  ngOnInit(): void {
  }
}
