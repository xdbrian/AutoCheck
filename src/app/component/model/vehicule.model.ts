import {InfoSat} from './info-sat.module';
import {InfoSunat} from './info-sunat.model';
export class Vehicule {
  placa: string;
  marca: string;
  modelo: string;
  color: string;
  calificacion: string;
  infoSat: InfoSat;
  infoSunat: InfoSunat;
};
