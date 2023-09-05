import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./mantenedores/usuarios/login/login.component";
import { RegisterComponent } from "./mantenedores/usuarios/register/register.component";
import { AppComponent } from "./app.component";
import { LibromaintainerComponent } from "./mantenedores/libros/libromaintainer/libromaintainer.component";
import { ActividadesmaintainerComponent } from "./mantenedores/actividades/actividadesmaintainer/actividadesmaintainer.component";
import { IndexComponent } from "./index/index.component";
import { OamaintainerComponent } from "./mantenedores/oa/oamaintainer/oamaintainer.component";
import { AddoaComponent } from "./mantenedores/oa/addoa/addoa.component";
import { TmmaintainerComponent } from "./mantenedores/tm/tmmaintainer/tmmaintainer.component";

const appRoutes = [
    { path: "", component: IndexComponent},
    { path: "login", component: LoginComponent},
    { path: "register", component: RegisterComponent },
    { path: "libros", component: LibromaintainerComponent},
    { path: "actividades", component: ActividadesmaintainerComponent},
    { path: "oas", component: OamaintainerComponent },
    { path: "oas/add", component: AddoaComponent },
    { path: "tms", component: TmmaintainerComponent }
];

export const routing = RouterModule.forRoot(appRoutes);