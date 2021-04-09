import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 //A3 creando la propiedad propiedadesParrafo que va ser un objeto indefinido (any)

 propiedadesParrafo:any;
  sise:number;
  
  //F3  creando la propiedad  mostrar que va a ser de tipo Booleano
  mostrar:boolean;

 //A3
 constructor(){
   this.propiedadesParrafo={
     color:'blue',
     fontSize:'30px'
    }
    var regex=/(\d+)/g;
    this.sise=this.propiedadesParrafo.fontSize.match(regex);

    //F3 
    this.mostrar=false;
 }
 //A4
 cambiaColor(pColor:string){
   //Probaremos el switch
   //de las propiedades del parrafo voy a cambiar solo la propiedad color
   switch(pColor){
     case 'a':
       this.propiedadesParrafo.color='yellow';
       break;
    case 'r':
      this.propiedadesParrafo.color='red';
      break;
    case 'v':
      this.propiedadesParrafo.color='green';
      break;
   }

 } 
 cambiaTamano(pTamano:string){
   switch(pTamano){
    case 'mas':
       this.propiedadesParrafo.fontSize=`${this.sise ++}px`;
       break;
    case 'menos':
      this.propiedadesParrafo.fontSize=`${this.sise --}px`;
      break;
   }
 }
 //C2 
 onChange($event:any){
   console.log('Entra')
   //recordando event.target era el input (elemento que esta capturando este elemento)
   //value sera el valor que recibe 
  //  console.log($event.target.value);

  //cambiando la propiedad fonysize de tamano
  //el valor se encuentra en $event.target.value
  this.propiedadesParrafo.fontSize=`${$event.target.value}px`;
 }
 onInput($event:any){
   this.propiedadesParrafo.fontSize=`${$event.target.value}px`;

  }
  //F5 vamos a alternar los true false con la negacion
  onClickMostar(){
    this.mostrar= !this.mostrar;
  }
}
