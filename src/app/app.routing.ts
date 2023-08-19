import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./mantenedores/usuarios/login/login.component";
import { RegisterComponent } from "./mantenedores/usuarios/register/register.component";
import { AppComponent } from "./app.component";
import { LibromaintainerComponent } from "./mantenedores/libros/libromaintainer/libromaintainer.component";
import { AddlibroComponent } from "./mantenedores/libros/addlibro/addlibro.component";
import { IndexComponent } from "./index/index.component";

const appRoutes = [
    { path: "", component: IndexComponent},
    { path: "login", component: LoginComponent},
    { path: "register", component: RegisterComponent },
    { path: "libros", component: LibromaintainerComponent},
    { path: "addlibro", component: AddlibroComponent}
];

export const routing = RouterModule.forRoot(appRoutes);