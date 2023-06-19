import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!: string;
  password!: string;
  showPassword: boolean;


   togglePasswordVisibility(){
    this.showPassword = !this.showPassword
   }

  constructor( private router : Router){
    this.showPassword = false;

  }
  
  onLogin(){
    console.log('Logging in...');
    console.log('Username:', this.username);
    console.log('Password:', this.password);
    this.router.navigate(['/list']);
  }
}
