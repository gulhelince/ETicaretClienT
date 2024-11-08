import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { AlertifyService, MessageType, Position } from 'src/app/services/admin/alertify.service';
//declare var alertify: any; //alertifyJS kütüphanesini kullanabilmek için import edilir
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent extends BaseComponent implements OnInit{

  constructor(
    private alertify:AlertifyService,spinner:NgxSpinnerService
  ) {
   super(spinner)
  }
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
  }


   //Bir kütüphaneyi kullanırken o kütüphaneyi salt bir şekilde kullanmaktansa o kütüphaneyi özelleştirmek daha verimli olur.
  // ngOnInit(): void {
  //   this.showSpinner(SpinnerType.BallAtom);
  // }

  m(){
    this.alertify.message("Merhaba",{
      messageType:MessageType.Success,
      delay:5,
      position:Position.TopRight

    })
  }

  d(){
    this.alertify.dismiss();
  }

 

}
