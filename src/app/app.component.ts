import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `

<app-navbar></app-navbar>
  <div class="container">
    <h1>{{ title }}</h1>
  </div>
    
  `,
  styles: []
})
export class AppComponent {
  title = 'vini';
}
