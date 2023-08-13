import { RouterModule, Routes } from "@angular/router";
import { UsersComponent } from "./users/users.component";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { AppComponent } from "./app.component";

const appRoutes = [
    { path: "", component: AppComponent},
    { path: "login", component: LoginComponent},
    { path: "register", component: RegisterComponent }
];

export const routing = RouterModule.forRoot(appRoutes);