import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
//services
import { GeneralData } from '../../services/GeneralData.component';
import { Petition } from '../../services/petition.services'
import { MessageError } from '../../component/message-error/message-error.component'
import { ViewChild } from '@angular/core'
import {Vehicule} from '../../component/model/vehicule.model';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers : [ Petition,GeneralData ]
})
export class HomeComponent implements OnInit {

  vehiculo: Vehicule
  name : string
  @ViewChild('messageError') messageError :MessageError

  constructor(private petition : Petition,private route:Router,private generalData:GeneralData){

  }

  ngOnInit() {
    this.vehiculo = this.generalData.getInfoVehicule()



  }

  search(){

    let url='http://192.168.65.35:8080/vehicle/svcbasic'
    let data = {"placa": this.name};
    this.petition.getPost(url,data)
        .map(response => response.json())
        .subscribe(
            data => {
              console.log(data)

              if(data.status != 500) {

                this.vehiculo.placa = data.motivo
                this.vehiculo.marca = data.marca
                this.vehiculo.modelo = data.modelo
                this.vehiculo.color = 'Blanco'
                this.vehiculo.calificacion = data.score
          //      this.vehiculo.infoSat = {}
          //      this.vehiculo.infoSunat = {}
                this.vehiculo.comments = data.comentario



                this.route.navigate(['general-info'])
              }else {
                this.messageError.addAlert("Lo sentimos la placa no existe")
              }
            },
            err => {
              this.messageError.addAlert("Lo sentimos la placa no existe")
              console.log(err)
            },
            () => console.log(' complete for Server Metrics ')
        )

  }
}
