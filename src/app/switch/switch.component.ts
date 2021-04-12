import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.css']
})
export class SwitchComponent implements OnInit {

  // H3 generando una variable numero y luego string
  opcionNumero:number;
  opcionString:string;
  constructor() {
    // H3
    this.opcionNumero=4;
    this.opcionString='tres';
   }

  ngOnInit(): void {
  }

}
