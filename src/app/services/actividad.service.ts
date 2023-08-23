import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { EntidadGenericaRequest } from "../models/EntidadGenericaRequest";
import { ActividadMerDTO } from "../models/ActividadMerDTO";

@Injectable({
    providedIn: "root",
  })

  export class ActividadService {
    REST_URL = environment.apiMerBackend;

    constructor(private http: HttpClient){}

    save(actividad: ActividadMerDTO) {
        return this.http.post(this.REST_URL + "actividadmer/save", actividad);
    }

    getActividades() {
      return this.http.get(this.REST_URL + "actividadmer/getAllActividades");
    }

    deleteActividad(id: number) {
      return this.http.get(this.REST_URL + "actividadmer/deleteActividad?id=" + id);
    }

    getLibrosYRedes() {
      return this.http.get(this.REST_URL + "actividadmer/getLibrosYRedes");
    }
  }