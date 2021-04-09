import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semaforo',
  templateUrl: './semaforo.component.html',
  styleUrls: ['./semaforo.component.css']
})
export class SemaforoComponent implements OnInit {

  //D3
  cadenadeClases:string;
  //D4 trabajando con array
  arrayClases:string[];

  //E3 creando colorSeleccionado
  colorSeleccionado:string;
  
  constructor() { 
    //D3
    this.cadenadeClases='amarillo';
    //D4 trabajando con array
    this.arrayClases=['rojos'];
    //incluyendo mas estilos que tenemos con el push
    this.arrayClases.push('redondo');
    this.arrayClases.push('borde');

    //E3
    this.colorSeleccionado='r';
  }

  //E4 

  ngOnInit(): void {
    setInterval(()=>{
      if(this.colorSeleccionado==='r'){
        this.colorSeleccionado='a';
      }else if(this.colorSeleccionado==='a'){
        this.colorSeleccionado='v';
      }else if(this.colorSeleccionado==='v'){
        this.colorSeleccionado='r';
      }
    },1000);
  }

}
