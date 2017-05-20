import { Component, OnInit } from '@angular/core';
import {Vehicule} from '../model/vehicule.model';

@Component({
  selector: 'app-info-vehicule',
  templateUrl: './info-vehicule.component.html',
  styleUrls: ['./info-vehicule.component.css']
})
export class InfoVehiculeComponent implements OnInit {
  vehicule: Vehicule;
  constructor() {
    this.vehicule = {
      marca: 'TOYOTA',
      modelo: 'RAV',
      placa: 'AAA-BBB',
      color: 'GRIS',
      calificacion: 'Auto Seguro',
      infoSat: {
        propietario: 'dfjdkf',
        marca: 'TOYOTA',
        modelo: 'RAV',
        placa: 'AAA-BBB',
        color: 'GRIS',
        annio: 2000,
      },
      infoSunat: {
        deudaTribu: 'NO TIENE',
        moras: 'varios'
      }
    };
  }

  ngOnInit() {
  }

}
