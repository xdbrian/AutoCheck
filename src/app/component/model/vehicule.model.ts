import {InfoSat} from './info-sat.module';
import {InfoSunat} from './info-sunat.model';
import {Commentary} from '../model/comment.model';
export class Vehicule {
  placa: string;
  marca: string;
  modelo: string;
  color: string;
  calificacion: string;
  infoSat: InfoSat;
  infoSunat: InfoSunat;
  comments?: any[];
};
