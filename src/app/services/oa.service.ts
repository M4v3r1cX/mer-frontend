import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { OaDTO } from "../models/OaDTO";
import { AsociarOaDTO } from "../models/AsociarOaDTO";

@Injectable({
    providedIn: "root",
  })

  export class OaService {
    REST_URL = environment.apiMerBackend;

    constructor(private http: HttpClient){}

    save(oa: OaDTO) {
      return this.http.post(this.REST_URL + "oa/save", oa);
    }

    saveAsociarOas(oa: AsociarOaDTO) {
      return this.http.post(this.REST_URL + "oa/saveAsociarOas", oa);
    }

    getOas() {
      return this.http.get(this.REST_URL + "oa/getAllOas");
    }

    deleteOa(id: number) {
      return this.http.get(this.REST_URL + "oa/deleteOa?id=" + id);
    }

    getRedes() {
      return this.http.get(this.REST_URL + "oa/getRedes");
    }

    getOa(id: string) {
      return this.http.get(this.REST_URL + "oa/getOa?id=" + id);
    }

    getHijosOa(id: string) {
      return this.http.get(this.REST_URL + "oa/getHijos?id=" + id);
    }

    getHijoById(id: string) {
      return this.http.get(this.REST_URL + "oa/getHijo?id=" + id);
    }

    getOaAsociado(id: string) {
      return this.http.get(this.REST_URL + "oa/getOaAsociaciones?id=" + id);
    }

    guardarPosicionOA(id: string, x: number, y: number) {
      return this.http.post(this.REST_URL + "oa/savePosicion", {
        id: id,
        x: x,
        y: y
      });
    }

    getBackgroundMapa(id: string, tipo: string) {
      let ret: string = "";

      switch(id) {
        case "1":
          ret = "assets/mapas/" + tipo + "/numeros.svg";
          break;
        case "2":
          ret = "assets/mapas/" + tipo + "/campo_aditivo.svg";
          break;
        case "3":
          ret = "assets/mapas/" + tipo + "/campo_multiplicativo.svg";
          break;
        case "4":
          ret = "assets/mapas/"+ tipo + "/algebra.svg";
          break;
        case "5":
          ret = "assets/mapas/" + tipo + "/medicion.svg";
          break;
        case "6":
          ret = "assets/mapas/" + tipo + "/geometria.svg";
          break;
        case "7":
          ret = "assets/mapas/" + tipo + "/probabilidades.svg";
          break;
        default:
          ret = "assets/Recurso2.svg";
          break;
      }

      return ret;
    }

    updateTextoOaHijo(id: string, texto: string) {
      return this.http.post(this.REST_URL + "oa/updateTextoHijo", {
        id: id,
        texto: texto
      });
    }
  }