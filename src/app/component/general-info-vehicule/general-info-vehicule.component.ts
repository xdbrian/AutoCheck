import { Component, OnInit } from '@angular/core';
import {Vehicule} from '../model/vehicule.model';

@Component({
  selector: 'app-general-info-vehicule',
  templateUrl: './general-info-vehicule.component.html',
  styleUrls: ['./general-info-vehicule.component.css']
})
export class GeneralInfoVehiculeComponent implements OnInit {

  vehicule: Vehicule;
  constructor() {
    this.vehicule = {
      marca: 'TOYOTA',
      modelo: 'RAV',
      placa: 'AAA-BBB',
      color: 'GRIS',
      calificacion: 'Auto Seguro'
    };
  }


  ngOnInit() {
  }

}
