import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { News } from '../news';
import { Jobs } from '../jobs';

@Injectable({
  providedIn: 'root'
})
export class JobsService {
  headers = new HttpHeaders({
  });

  private postUrl = 'http://localhost:4201/addjob';
  private getUrl = 'http://localhost:4201/getjob';
  private detailUrl = 'http://localhost:4201/detailjob/';
  private deleteUrl = 'http://localhost:4201/deletejob/';
  private updateUrl = 'http://localhost:4201/updatejob/';

  constructor(private http: HttpClient, private router: Router) { }

  //Añadir vacantes

  addJob(job){
    return this.http.post(this.postUrl, job);
  }

  //Obtener vacantes

  getJobs(): Observable<any>{
    return this.http.get(this.getUrl);
  }

  //Detalle de vacantes

  getDetails(id): Observable<any>{
    return this.http.get<Jobs>(this.detailUrl + id)
  }
  //Eliminar vacantes

  deleteJob(id: String){
    return this.http.delete<any>(this.deleteUrl + id);
  }
}
