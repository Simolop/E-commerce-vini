import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { IUser } from 'src/app/model/user';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  template: `
    <div class="container">
        <h2 class="mt-3 text-center mb-4">Welcome {{ user?.name }} to our Wine cellar</h2>
        <img class="rounded mx-auto d-block" width="1000" src="https://wips.plug.it/cips/initalia.virgilio.it/cms/2020/09/migliori-vini-photo.jpg" alt="">
        <!-- <img class="rounded mx-auto d-block" width="1000" src="https://www.confagricolturafoggia.it/wp-content/uploads/2020/03/vino-2015.jpg" alt="">  -->
  `,
  styles: [
  ]
})

export class HomeComponent implements OnInit {
  user : IUser | null = null;
  params: string = '';
  
    constructor(private route: ActivatedRoute, private userService: UserService, private toastService: ToastrService ) {
      console.log(route.snapshot.queryParamMap);
    }
  
    ngOnInit(): void {
  
      this.route.queryParams.subscribe(params => {
        console.log(params)
        
        if (params && !params.user) {
          this.toastService.error('user not found', 'Major Error', {timeOut: 3000,});
        } else {
          this.params = params.user;
          this.userService.getUser(this.params).subscribe((data)=>{
          this.user= data;
          console.log("user->", this.user);
          }, error => {
          // serve per gestire errori della chiamata
          this.toastService.error('user not found', 'Major Error', {timeOut: 3000,});
          })  
        }
      })
    }
}
