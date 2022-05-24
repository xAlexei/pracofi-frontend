import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NewsService } from '../services/news.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: object;
  newsForm;

  constructor(
    private formBuilder: FormBuilder,
    private service: NewsService
  ) { 
    this.newsForm = this.formBuilder.group({
        titulo: '',
        content: '',
        image: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(f){
    if(f){
      console.log('Registrado', f);
      this.service.addNews(f).subscribe((data: any[])=>{
        console.log(data);
        this.news = data;
        Swal.fire(
          '¡Guardado!',
        )
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No puede haber campos vacios'
      })
    }
  }

}
