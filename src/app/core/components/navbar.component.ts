import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg rounded-bottom">
        <div class="container-fluid">
          <a class="navbar-brand fs-3 text-white" href="#">
            Vini 
           <img class="mb-3" width="20" height="36" src="https://www.freeiconspng.com/thumbs/wine-glass-png/wine-glass-png-image-5.png" alt="">
          </a>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link active text-white" aria-current="page" routerLink='/home' routerLinkActive="active">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" routerLink='/products' routerLinkActive="active">Products</a>
              </li>
              
            </ul>
          </div>
        </div>
        <div class="d-flex">
        <li class="nav-item d-flex justify-content-end">
                <a class="nav-link text-white" routerLink='/profile' routerLinkActive="active">
                  <i class="fa fa-user fs-5"></i>
                </a>
              </li>
              <li class="nav-item d-flex justify-content-end">
                  <a class="nav-link active text-white" routerLink='/cart' routerLinkActive="active">
                  <i class="fs-5 fa fa-shopping-cart"></i>
              </a> 
              </li>
          </div>
      </nav>
    </div>
  `,
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
