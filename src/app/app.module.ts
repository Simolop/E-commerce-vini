import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { CartComponent } from './shared/components/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    CartComponent
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    CartComponent
  ]
})
export class AppModule { }
