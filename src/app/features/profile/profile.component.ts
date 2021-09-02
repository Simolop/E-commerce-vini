import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `
  <div class="container rounded bg-white mt-5 mb-5">
  <div class="row">
      <div class="col-md-3 border-right">
          <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" src="https://www.drshaneholmes.com/wp-content/uploads/2020/03/146-1468479_my-profile-icon-blank-profile-picture-circle-hd.png" width="200"><span class="font-weight-bold">Marcus</span><span class="text-black-50">marcus12@bbb.com</span><span> </span></div>
      </div>
      <div class="col-md-5 border-right">
          <div class="p-3 py-5">
          <div class="d-flex justify-content-between align-items-center mb-3">
                    <div class="d-flex flex-row align-items-center back">
                      <button routerLink="/home" class="btn btn-primary profile-button" type="button" style="background-color: #275572"> <i class="fa fa-long-arrow-left mr-1 mb-1">   Back to home  </i></button> 
                    </div>
                    <button class="btn btn-primary profile-button" type="button" style="background-color: #275572"> <i class="fa fa-edit mr-1 mb-1"> Edit Profile </i></button>
                   
                </div>
              
              <div class="row mt-2">
                  <div class="col-md-6"><label class="labels">Name</label><input type="text" class="form-control" placeholder="first name" value=""></div>
                  <div class="col-md-6"><label class="labels">Surname</label><input type="text" class="form-control" value="" placeholder="surname"></div>
              </div>
              <div class="row mt-3">
                  <div class="col-md-12 mb-3"><label class="labels">PhoneNumber</label><input type="text" class="form-control" placeholder="enter phone number" value=""></div>
                  <div class="col-md-12 mb-3"><label class="labels">Address</label><input type="text" class="form-control" placeholder="enter address" value=""></div>
                  <div class="col-md-12"><label class="labels">Email ID</label><input type="text" class="form-control" placeholder="enter email id" value=""></div>
              </div>
              <div class="row mt-3">
                  <div class="col-md-6"><label class="labels">Country</label><input type="text" class="form-control" placeholder="country" value=""></div>
                  <div class="col-md-6"><label class="labels">State/Region</label><input type="text" class="form-control" value="" placeholder="state"></div>
              </div>
              <div class="mt-5 text-center"><button class="btn btn-primary profile-button" type="button" style="background-color: #275572">Save Profile</button></div>
          </div>
      </div>
    </div>
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
