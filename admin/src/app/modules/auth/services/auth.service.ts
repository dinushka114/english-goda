import { LoginUser } from '../../models/login.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  private loginUrl = "https://still-reef-77817.herokuapp.com/api/admin/login";
  // private loginUrl = 'http://localhost:3000/api/admin/login';
  token!: string;

  getToken() {
    return localStorage.getItem('token');
  }

  // async login(loginData: LoginUser) {
  //   this.http.post<{ token: string }>(this.loginUrl, loginData).subscribe(
  //     (res) => {

  //     },
  //     (err) => {
  //       if(err instanceof HttpErrorResponse){
  //         this.router.navigate(['/login']);
  //       }
  //     }
  //   );
  // }

  async login(loginData: LoginUser) {
    this.http.post<{ token: string }>(this.loginUrl, loginData).subscribe(
      (res) => {
        const token = res.token;
        localStorage.setItem('token', token);
        this.router.navigate(['/dashboard/grammer-list']);
      },
      (err) => {
        if (err instanceof HttpErrorResponse) {
          if (err.status == 403) {
            this.router.navigate(['/login']);
          }
        }
      }
    );
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
