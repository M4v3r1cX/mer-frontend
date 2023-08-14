import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: "root",
})
export class UsersService {

    REST_URL = environment.apiMerBackend;
    
    constructor(private http: HttpClient) {}

  login(user: any){
    return this.http.get(this.REST_URL + "usuario/login", user);
  }

  register(user: any) {
    return this.http.post(this.REST_URL + "usuario/register", user);
  }
}