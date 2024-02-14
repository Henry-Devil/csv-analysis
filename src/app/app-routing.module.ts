import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/components/login/login.component';
import { MainMenuComponent } from './shared/components/main-menu/main-menu.component';
import { AuthGuard } from './core/auth/auth.guard';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', canActivate: [AuthGuard], pathMatch: 'full', redirectTo: 'main' }, // Redirigir a la ruta 'main' en lugar de 'login'
  { path: 'main', canActivate: [AuthGuard], component: MainMenuComponent }, // Agregar una ruta para la página principal
  // Otras rutas...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
