import { Injectable } from '@angular/core';
import {Vehicule} from '../component/model/vehicule.model';

/**
* @class FavoriteService
* @description Servicio para manejar las peticiones de las consultas
* @function getInfMatricula - Funcion para retornar la informacion de una matricula
*/
@Injectable()
export class GeneralData {

    private Vehicule = new Vehicule();

  getInfoVehicule() {
    return this.Vehicule;
  }

}
