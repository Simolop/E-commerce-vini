import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
    <div class="container">
      <h1>Your profile</h1>
    </div>
  `,
  styles: [
  ]
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
