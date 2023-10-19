import { Component, OnInit } from '@angular/core';
import { WelcomeStudentComponent } from '../students/welcome-student/welcome-student.component';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  username: string = ''; // Variable para almacenar el nombre de usuario
  password: string = ''; // Variable para almacenar la contraseña

  constructor(
    private http: HttpClient,
    private snackBar: MatSnackBar,
    private router: Router
  ) { }

  togglePasswordVisibility() {
    this.hide = !this.hide;
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Los valores de usuario y contraseña se pueden acceder a través de this.username y this.password
     const formData = form.value;
     const user = {
      nombreUsuario: formData.username,
      contraseña: formData.password,
     };
    
     this.http.post('http://localhost:4001/users/login', user).subscribe({
      next: (data) => {
        
        this.mostrarMensaje('Inicio de sesión exitoso', 'success');
        // Redirigir al usuario a la página de inicio después del inicio de sesión
        localStorage.setItem('token', JSON.stringify(data));
        this.router.navigate(['/students']);
      },
      error: (error) => {
        console.error(error);
        this.mostrarMensaje('Error al iniciar sesión', 'error');
      }
    });
  } else {
    this.mostrarMensaje('Los campos son obligatorios', 'error');
  }
}

mostrarMensaje(mensaje: string, tipo: 'success' | 'error') {
  this.snackBar.open(mensaje, 'Cerrar', {
    duration: 5000,
    panelClass: tipo === 'success' ? 'success-message' : 'error-message',
  });
}

ngOnInit(): void {
  // Tu lógica de inicialización aquí
}
}
  
  


