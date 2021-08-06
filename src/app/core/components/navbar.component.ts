import { Component, OnInit } from '@angular/core';

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
 
  constructor() { }

  ngOnInit(): void {
  }
}
