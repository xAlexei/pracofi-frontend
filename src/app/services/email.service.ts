import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(private http: HttpClient) { }

  sendMessage(body){
    return this.http.post('http://localhost:4201/formulario', body);
  }

  sendMailContact(body){
    return this.http.post('http://localhost:4201/contacto', body);
  }

}
