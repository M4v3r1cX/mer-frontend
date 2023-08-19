import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CookieService } from "ngx-cookie-service";

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';

import { routing } from './app.routing';
import { LoginComponent } from './mantenedores/usuarios/login/login.component';
import { RegisterComponent } from './mantenedores/usuarios/register/register.component';
import { LibromaintainerComponent } from './mantenedores/libros/libromaintainer/libromaintainer.component';
import { AddlibroComponent } from './mantenedores/libros/addlibro/addlibro.component';
import { IndexComponent } from './index/index.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { DeletelibroComponent } from './mantenedores/libros/deletelibro/deletelibro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    LibromaintainerComponent,
    AddlibroComponent,
    IndexComponent,
    DeletelibroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
