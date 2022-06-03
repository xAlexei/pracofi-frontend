import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
  
})
export class UsuariosService {

  headers = new HttpHeaders ({
    'Content-Type': 'application/json',
  });

  private postUrl = 'http://localhost:4201/newuser';
  private getUrl = 'http://localhost:4201/getusers';
  private deleteUrl = 'http://localhost:4201/';
  private updateUrl = 'http://localhost:4201/updateuser/:id';

  constructor(private http: HttpClient, private router: Router) { }

  //Añadir usuario
  addUser(user) {
    return  this.http.post<any>(this.postUrl, user);
    }
  //Obtener todos los usuarios
  getUsers(): Observable<any>{
      return this.http.get(this.getUrl);
  }
  //Actualizar usuario
  updateUser(user){
      return this.http.put(this.updateUrl, user);
  }
  //Eliminar usuarios
  delete(id: string) {
    return this.http.delete(this.deleteUrl + 'deleteuser/' + id)           
  }
  

}
