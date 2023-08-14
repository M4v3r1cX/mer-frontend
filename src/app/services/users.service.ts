import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from '../../environments/environment';
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: "root",
})
export class UsersService {

    REST_URL = environment.apiMerBackend;
    
    constructor(private http: HttpClient, private cookies: CookieService) {}

    login(loginDTO: any){
      return this.http.post(this.REST_URL + "usuario/login", loginDTO);
    }

    register(user: any) {
      return this.http.post(this.REST_URL + "usuario/register", user);
    }

    setToken(token: string) {
      this.cookies.set("token", token);
    }
    getToken() {
      return this.cookies.get("token");
    }
}