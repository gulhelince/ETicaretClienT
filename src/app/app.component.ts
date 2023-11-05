import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
//import { CustomToastrService, ToastrMessageType } from './services/ui/custom-toastr.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from './services/ui/custom-toastr.service';
declare var $:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ETicaretClient';

  // constructor(private toastrService:CustomToastrService){
  //   toastrService.message("Merhaba","Heli",{
  //     messageType:ToastrMessageType.Info,
  //     position:ToastrPosition.TopCenter
  //   });
  //   toastrService.message("Merhaba","Heli",{
  //     messageType:ToastrMessageType.Success,
  //     position:ToastrPosition.TopCenter
  //   });
  //   toastrService.message("Merhaba","Heli",{
  //     messageType:ToastrMessageType.Warning,
  //     position:ToastrPosition.TopCenter
  //   });
  //   toastrService.message("Merhaba","Heli",{
  //     messageType:ToastrMessageType.Error,
  //     position:ToastrPosition.TopCenter
  //   });
  // }

  constructor(){}
}


$.get("https://localhost:7295/api/products",data=>{
  console.log(data)
})

//JQUERY
// $(document).ready(()=>{
//   alert("merhaba")
// })
