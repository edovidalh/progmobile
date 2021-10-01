import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  data: any = {
    Usuario: "",
    Contraseña: ""
  }
  field:string="";

constructor(public toastController: ToastController) {}
ngOnInit() {}

ingresar(){
  if(this.validateModel(this.data)){
    this.presentToast("Bienvenido");
  }
  else{
    this.presentToast("Falta: "+this.field);
  }
}

validateModel(model:any){
  
  for (var [key, value] of Object.entries(model)) {
    
    if (value=="") {
     
      this.field=key;

      return false;
    }
  }
  return true;
}

async presentToast(message:string, duration?:number){
  const toast = await this.toastController.create(
    {
      message:message,
      duration:duration?duration:2000
    }
  );
  toast.present();
}
}
