import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bucles',
  templateUrl: './bucles.component.html',
  styleUrls: ['./bucles.component.css']
})
export class BuclesComponent implements OnInit {

  //G2 generando un array.....la intencion es listar en un UL sencillo
  personas:any[];
  personas2:any[];

  constructor() {
    //G2
    this.personas=[
      {nombre:'elias',apellidos:'mollericona',edad:27},
      {nombre:'sara',apellidos:'vera',edad:22},
      {nombre:'viviana',apellidos:'s',edad:22},
      {nombre:'belen',apellidos:'villegas',edad:20},
      {nombre:'angeles',apellidos:'ibanez',edad:20},

    ]
    this.personas2=[
      {nombre:'elias',apellidos:'mollericona',telefono:'342 234',edad:27},
      {nombre:'sara',apellidos:'vera',telefono:'54 231',edad:22},
      {nombre:'viviana',apellidos:'s',telefono:'123 8734',edad:22},
      {nombre:'belen',apellidos:'villegas',telefono:'312 9034',edad:20},
      {nombre:'angeles',apellidos:'ibanez',telefono:'987 2674',edad:20},
      {nombre:'pochis',apellidos:'ramirez',telefono:'319 454',edad:23},
      {nombre:'luz',apellidos:'ventura',telefono:'1032 223',edad:26},

    ]
   }

  ngOnInit(): void {
  }
  onClick(){
    this.personas2.push({
      nombre:'Mario',apellidos:'Giron',telefono:'23415 234',edad:34
    })
  }

}
