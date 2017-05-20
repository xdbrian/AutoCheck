import { Component, OnInit } from '@angular/core';
import {Vehicule} from '../model/vehicule.model';
import {MdDialog} from '@angular/material';
import {NewCommentComponent} from '../new-comment/new-comment.component';

@Component({
  selector: 'app-detail-info-vehicule',
  templateUrl: './detail-info-vehicule.component.html',
  styleUrls: ['./detail-info-vehicule.component.css']
})
export class DetailInfoVehiculeComponent implements OnInit {
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
      },
      comments: [
        {comentario: 'AAAAA', usuario: 'CQUISPE', fecha: '12/01/2014', calificacion: 'Bueno'},
        {comentario: 'BBBBB', usuario: 'CARMEN', fecha: '12/01/2015', calificacion: 'Malo'}
      ]
    };
  }
  addComment() {
    // this.dialog.open(NewCommentComponent, {position: {top: '0px'}});
    // // dialogRef.updatePosition({top: '25px'});
    // dialogRef.componentInstance.crudType = constant.crudType.create;
    // dialogRef.componentInstance.afterSave.subscribe(person => {
    //   this.afterSave(person);
    // });
  }

  ngOnInit() {
  }

}
