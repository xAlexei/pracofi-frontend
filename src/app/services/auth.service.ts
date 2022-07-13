import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../_models/user';
import { JwtResponse } from './models/jwt-response';
import { tap } from 'rxjs/operators';
import { Observable, BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable()

export class AuthService {
  private URL =  'http://localhost:4201';  
  
  constructor(private http: HttpClient, private router: Router ) { }

  signUpUser(user) {
    return this.http.post<any>(this.URL + '/signup', user);
  }

  signInUser(user) {
    return this.http.post<any>(this.URL + '/login', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/landing']);
  }

  getToken() {
    return localStorage.getItem('token');
  }


}
