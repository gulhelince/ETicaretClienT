import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { BaseComponent, SpinnerType } from 'src/app/base/base.component';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent extends BaseComponent implements OnInit {

  constructor(spinner:NgxSpinnerService,
    private httpClientService:HttpClientService
    ) {
    super(spinner)
   }

   //GET
  ngOnInit(): void {
    this.showSpinner(SpinnerType.BallAtom);
    this.httpClientService.get({
      controller:"products"
    }).subscribe(data => console.log(data));

    //POST
    // this.httpClientService.post({
    //   controller:"products"
    // },{
    //   name:"berf",
    //   stock:"500",
    //   price: "100"
    // }).subscribe();

    //PUT
    // this.httpClientService.put({
    //   controller:"products",
    // }, {
    //   id: "6c7d86a8-db30-4f4f-a6a7-c0349f8d1895",
    //   name:"tastan",
    //   stock:"600",
    //   price:"200"
    // }).subscribe();

    //Delete
    // this.httpClientService.delete({
    //   controller: "products"
    // },"9f978c96-3580-4478-b5df-1ffcc72d61f8").subscribe();

    //Başka bir servisteki data'nın alınması
    // this.httpClientService.get({
    //   baseUrl:"https://jsonplaceholder.typicode.com",
    //   controller:"posts"
    // }).subscribe(data => console.log(data));

    // this.httpClientService.get({
    //   fullEndPoint: "https://jsonplaceholder.typicode.com/posts"
    // }).subscribe(data => console.log(data));
  }
}
