import { AuthService } from '../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginUser } from 'src/app/modules/models/login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService:AuthService) { }

  isLoading = false;

  onSubmitLoginForm(form:NgForm){
   
    if(form.invalid){
      return 
    }
    const loginData:LoginUser = {
      username:form.value.username,
      password:form.value.password
    }

    this.authService.login(loginData);
  }

  ngOnInit(): void {
  }

}
