import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';


export class BaseComponent {

  constructor(
    private spinner:NgxSpinnerService
  ){}

  showSpinner(spinnerNameType:SpinnerType){
    this.spinner.show(spinnerNameType);

    setTimeout(()=>this.hideSpinner(spinnerNameType),1000);//üç saniye sonra kapatır
  }

  hideSpinner(spinnerNameType:SpinnerType){
    this.spinner.hide(spinnerNameType);
  }

}


//Metinsel parametreleri mümkün mertebe seçilebilir hale getirilmeli(enum)
export enum SpinnerType{
  BallAtom="s1",
  BallScaleMultiple="s2",
  BallSpinClockwiseFadeRotating="s3"
}
