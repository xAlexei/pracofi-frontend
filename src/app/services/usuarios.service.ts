import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  private postUrl = 'http://localhost:4201/newuser';
  private getUrl = 'http://localhost:4201/getusers';
  private deleteUrl = 'http://localhost:4201/deleteuser/:id';
  private updateUrl = 'http://localhost:4201/updateuser/:id';

  constructor(private http: HttpClient, private router: Router) { }

  addUser(user) {
    return  this.http.post<any>(this.postUrl, user);
    }

  getUsers(): Observable<any>{
      return this.http.get(this.getUrl);
  }

  
}
