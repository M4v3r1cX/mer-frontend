import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class LibroService {
    REST_URL = environment.apiMerBackend;

    constructor(private http: HttpClient){}

    save(libro: any) {
        return this.http.post(this.REST_URL + "libro/save", libro);
    }
}