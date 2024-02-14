import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa el servicio Router
import { AuthService } from '../../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    if (this.authService.login(this.username, this.password)) {
      // Redirige a la página principal después de un inicio de sesión exitoso
      this.router.navigate(['/main']); // Ajusta la ruta según la estructura de tu aplicación
    } else {
      console.log('Credenciales incorrectas');
    }
  }
}
