import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Rx";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
/**
 * @class FavoriteService
 * @description Servicio para manejar las peticiones de las consultas
 * @function getInfMatricula - Funcion para retornar la informacion de una matricula
 */
@Injectable()
export class Petition {

    constructor(private http: Http) {}

    getPost(nameConstantsURL, dataObject): Observable<Response> {

        let body = JSON.stringify(dataObject)

            let header = {
                'Content-Type': 'application/json; charset=utf-8'
            };


        let head = new Headers(header);

        let options = new RequestOptions({ headers: head, withCredentials: false }),
            response = this.http.post(nameConstantsURL, body, options).map((res: Response) => {

                return res;
            }).catch((err, source) => {
                console.log(err);
                return Observable.throw(err);
            });
        return response;
    }

}