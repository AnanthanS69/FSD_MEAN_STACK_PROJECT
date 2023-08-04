import { Component } from '@angular/core';
import { AuthService } from 'src/app/auth.service';
import { Router, RouterLink } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private _auth:AuthService,private router:Router){

  }

  user = {
    email: '',
    password:'',
  };

  loginuser(){
    this._auth.loginuser(this.user).subscribe((res:any)=>{
        localStorage.setItem('token',res.token);
        this.router.navigate([res.api]);
  })
}
}
