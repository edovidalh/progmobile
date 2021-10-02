import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  usuario:String;
  niveles:any[]=[
    {
      id: 1,
      name: 'RODRIGO IGNACIO ARCE ARELLANO',
      email: 'R.ARCE@duocuc.cl',
      car: 'Dodge Charger 1970',
      image: 'http://enthusiastnetwork.s3.amazonaws.com/uploads/sites/45/2015/04/1970-Dodge-Charger-R-T-front-three-quarter-01.jpg',
    },
    {
      id: 2,
      name: 'CRISTOBAL IVAN ARROYO DIAZ',
      email: 'C.ARROYOD@duocuc.cl',
      car: 'Nissan Skyline R34 GT-R',
      image: 'http://enthusiastnetwork.s3.amazonaws.com/uploads/sites/45/2015/04/112-0305-2f2f-wall-sky3-w.jpg',
    },
    {
      id: 3,
      name: 'GABRIEL RICARDO CARO ROJAS' ,
      email: 'GA.CARO@duocuc.cl',
      car: 'Mitsubishi Eclipse',
      image: 'http://enthusiastnetwork.s3.amazonaws.com/uploads/sites/45/2015/04/The-Fast-and-the-Furious-image-1.jpg',
    },
    {
      id: 4,
      name: 'MISAEL EDUARDO CONTRERAS MOLINA',
      email: 'MIS.CONTRERAS@duocuc.cl',
      car: 'Acura NSX',
      image: 'http://enthusiastnetwork.s3.amazonaws.com/uploads/sites/45/2015/04/2002-Acura-NSX-front-three-quarter-03.jpg',
    },
    {
      id: 5,
      name: 'PAOLO ALEXANDER DOVERI CIFUENTES',
      email: 'P.DOVERI@duocuc.cl',
      car: 'http://starwars.wikia.com/wiki/Leia_Organa',
      image: 'https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png',
    },
   {
      id: 6,
      name: 'LUCIANO CHRISTIAN GAJARDO CORTEZ',
      email: 'LUC.GAJARDO@duocuc.cl',
      car: 'Honda S2000',
      image: 'http://enthusiastnetwork.s3.amazonaws.com/uploads/sites/45/2015/04/2009-honda-s2000-track-action-1.jpg',
    },
    {
      id: 7,
      name: 'GONZALO IGNACIO GALDAMES QUINTANILLA',
      email: 'GO.GALDAMESQ@duocuc.cl',
      car: 'Toyota Supra Mark IV',
      image: 'http://enthusiastnetwork.s3.amazonaws.com/uploads/sites/45/2015/04/Toyota-Supra-FF-side-shot1.jpg',
    },
    {
      id: 8,
      name: 'MARCELO PABLO GODOY MORA',
      email: 'MARC.GODOYM@duocuc.cl',
      car: 'Mazda RX-7 FD',
      image: 'http://enthusiastnetwork.s3.amazonaws.com/uploads/sites/45/2015/04/1995-Mazda-RX-7-front-three-quarter.jpg',
    },
    {
      id: 9,
      name: 'WIDO ANDRES LABARCA PORMA',
      email: 'W.LABARCA@duocuc.cl',
      car: 'RB-Swapped 1967 Ford Mustang',
      image: 'http://enthusiastnetwork.s3.amazonaws.com/uploads/sites/45/2015/04/1967-Ford-Mustang-Nissan-Skyline-engine.jpg',
    },
    {
      id: 10,
      name: 'CRISTOBAL ALEJANDRO MARTINEZ MURUA',
      email: 'CRIST.MARTINEZM@duocuc.cl	',
      car: 'Chevrolet Yenko Camaro 1969',
      image: 'http://enthusiastnetwork.s3.amazonaws.com/uploads/sites/45/2015/04/112-0305-2f2f-wall-cam1-w.jpg',
    },
    {
      id: 11,
      name: 'GUILLERMO IGNACIO MORALES VARGAS',
      email: 'GU.MORALESV@duocuc.cl',
      car: 'Buick GNX 1987',
      image: 'http://enthusiastnetwork.s3.amazonaws.com/uploads/sites/45/2015/04/1987-Buick-Regal-GNX-Coupe-1.jpg',
    },
    {
      id: 12,
      name: 'NICOLAS ALFREDO PAGE VILLALOBOS',
      email: 'N.PAGE@duocuc.cl',
      car: 'F-Bomb Chevrolet Camaro',
      image: 'http://enthusiastnetwork.s3.amazonaws.com/uploads/sites/45/2015/04/roadkill-f-bomb.jpg',
    },
    {
      id: 13,
      name: 'DEBORA ALONDRA QUINTERO NAHUEL',
      email: 'DE.QUINTERO@duocuc.cl',
      car: 'Ford GT40',
      image: 'http://enthusiastnetwork.s3.amazonaws.com/uploads/sites/45/2015/04/Ford-GT40-FF-Train-Heist1.jpg',
    },

    {
      id: 14,
      name: 'BASTIAN ALEXIS	 TORO ROJAS',
      email: 'BAS.TORO@duocuc.cl',
      car: 'Dodge Charger Daytona 1969',
      image: 'http://enthusiastnetwork.s3.amazonaws.com/uploads/sites/45/2015/04/1969-Dodge-Charger-Daytona-right-front-1.jpg',
    },
    {
      id: 15,
      name: 'ANDRES ALEJANDRO EZRA VASQUEZ VASQUEZ',
      email: 'ANDRE.VASQUEZV@duocuc.cl',
      car: 'Nissan Skyline 2000 GT-R 1971',
      image: 'http://enthusiastnetwork.s3.amazonaws.com/uploads/sites/45/2015/04/1967-Nissan-Skyline-2000-GT-R-front-three-quarter.jpg',
    },
    {
      id: 16,
      name: 'NOEMI BELEN VERGARA CONTRERAS',
      email: 'NOE.VERGARA@duocuc.cl',
      car: 'Chevrolet Chevelle SS 1970',
      image: 'http://enthusiastnetwork.s3.amazonaws.com/uploads/sites/45/2015/04/Chevrolet-Chevelle-in-Fast-and-Furious.jpg',
    }
  ]

  data:any={
    nombre:"",
    apellido:"",
    education:"",
    nacimiento:""
  };

  viaje:any={
    conductor:"",
    destino:"",
    origen:"",
    fecha:"",
    hora:"",
    automovil:"",
    comuna:"",
    valor:""
  };

  constructor(public alertController: AlertController) {

  }

  planificar(){
    (this.data.nombre!="" && this.data.apellido!="") &&
    this.presentAlert("¡Planificación exitosa!", "Bienvenido/a "+this.data.nombre+" "+this.data.apellido+", su conductor se encuentra disponible para realizar el viaje solicitado.");
  }

  limpiar(){
    for (var [key, value] of Object.entries(this.data)) {
      Object.defineProperty(this.data,key,{value:""})
    }
  }

  mostrar(){
    (this.data.nombre!="" && this.data.apellido!="") &&
    this.presentAlert("Usuario", "Su nombre es "+this.data.nombre+" "+this.data.apellido);
  }

  async presentAlert(titulo:string,message:string) {
    const alert = await this.alertController.create({
      header: titulo,
      message: message,
      buttons: ['OK']
    });

    await alert.present();
  }

}