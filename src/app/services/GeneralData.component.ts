import { Injectable } from '@angular/core';
/**
* @class FavoriteService
* @description Servicio para manejar las peticiones de las consultas
* @function getInfMatricula - Funcion para retornar la informacion de una matricula
*/
@Injectable()
export class GeneralData {
  
    private vehiculeSearch:String ;

  getInfoVehicule() {
    return this.vehiculeSearch;
  }


}
