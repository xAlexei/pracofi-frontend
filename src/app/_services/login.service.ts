import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
    headers = new HttpHeaders


    private postURL = 'http://localhost:3000/login';

    constructor( private http: HttpClient, private router: Router) { 
    console.log('Login Service');
  }

  login(){

  }
}


