import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  headers = new HttpHeaders({

  });

  private postUrl = 'http://localhost:4201/addnews';
  private getUrl = 'http://localhost:4201/getnews';
  private deleteUrl = 'http://localhost:4201/deletenews/:id';
  private updateUrl = 'http://localhost:4201/updatenews/:id';

  constructor(private http: HttpClient, private router: Router) { }

  //Añadir noticias
  addNews(news){
    return this.http.post<any>(this.postUrl, news);
  }
  //Obtener noticias
  getNew(): Observable<any>{
    return this.http.get(this.getUrl)
  }
  //Eliminar noticias
  deleteNews(news){
    return this.http.delete<any>(this.deleteUrl);
  }
}
