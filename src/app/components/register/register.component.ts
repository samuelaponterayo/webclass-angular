import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [FormsModule],      
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  name: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  error: string = '';
  success: boolean = false;
  regexEmail: RegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  constructor() { }

  register() {
    // Validación básica
    this.success = false;
    this.error = '';
    
    if (this.name === '' || this.email === '' || this.password === '') {
      this.error = 'Por favor completa todos los campos';
      return;
    }

    if(!(this.regexEmail.test(this.email))){
      this.error = 'El correo es inválido';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.error = 'Las contraseñas no coinciden.';
      return
    }

    this.error = ''
    this.success = true
    return 
  }


}









