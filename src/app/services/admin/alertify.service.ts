//Özelleştime operasyonları burada yönetilir
import { Injectable } from '@angular/core';
 declare var alertify: any; //alertifyJS kütüphanesini kullanabilmek için import edilir

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  //Notifications görseli üzerinden kullanıcıya bir mesaj verilir
  //Oluşturulan metot tüm işlemlerimi yönetir
  //message metotu tetiklendiğinde string olarak verilen parametredeki mesaj neyse bu mesajı alertify kütüphanesi üzerinden ilgili metota uygun bir şekilde kullanıcıya sunar.
  //Hangi türde mesaj vericeksem o türe uygun mesajı çağırmak gerekiyor.
  //Bu şekilde ilgili kütüphane çok daha verimli bir şekilde kullanılabilir.
  // message(message:string, MessageType:MessageType,
  //   position:Position,
  //   delay:number=3 ,
  //   dismissOthers:boolean=false)
  message(message:string,options:Partial<AlertifyOptions>)
    {
    alertify.set('notifier','delay',options.delay);
    alertify.set('notifier','position',options.position);
    const msj =alertify[options.messageType](message);
    if(options.dismissOthers)
      msj.dismissOthers();
  }

  dismiss(){
    alertify.dismissAll();
  }
}

export class AlertifyOptions{
  messageType:MessageType=MessageType.Message;
  position:Position =Position.BottomLeft;
  delay:number=3;
  dismissOthers:boolean=false;
}

export enum MessageType{
  Error="error",
  Message="message",
  Notify="notify",
  Success="success",
  Warning="warning"
}

//Angularda bir şeyi parametrik hale getirmek demek enum kullanmak demek
export enum Position{
  TopCenter="top-center",
  TopRight="top-right",
  TopLeft="top-left",
  BottomRight="bottom-center",
  BottomCenter="bottom-center",
  BottomLeft="bottom-left"
}
