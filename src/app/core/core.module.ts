import { NgModule } from '@angular/core';
import { NavbarComponent } from './components/navbar.component';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavbarComponent
  ],
  imports: [
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    ToastrModule.forRoot(), // ToastrModule added
  ],
  exports: [
    BrowserAnimationsModule,
    HttpClientModule,
    ToastrModule,
    NavbarComponent,
  ]
})
export class CoreModule { }
