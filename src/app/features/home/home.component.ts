import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
        <h2 class="mt-3 text-center mb-4">Welcome to our Wine cellar</h2>
        <img class="rounded mx-auto d-block" width="1000" src="https://cdn.pixabay.com/photo/2016/10/22/20/34/wines-1761613__340.jpg" alt="">
    </div>
  `,
  styles: [
    `
    `
  ]
})
export class HomeComponent implements OnInit {

  //per passare il parametro 
  constructor(private route: ActivatedRoute) { 
      console.log(route.snapshot.queryParamMap)
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
        console.log("user:", params)
    })
  }

}
