import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NewsService } from '../services/news.service';
import Swal from 'sweetalert2';

export interface News {
  titulo: String,
  subtittle: String,
  content: String,
  image: String
}


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news: object;
  newsForm;

  displayedColumns: string[] = ['name', 'subtittle', 'actions' ];
  dataSource: MatTableDataSource<News>

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(
    private formBuilder: FormBuilder,
    private service: NewsService
  ) {
    //Obtener las noticias y listarlas
    this.service.getNew().subscribe(data =>{
      console.log(data);
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
      
    })


    this.newsForm = this.formBuilder.group({
        titulo: '',
        subtittle: '',
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
          'Good job!',
          'Registro exitoso!',
          'success'
        ).then(function(){
          location.reload();
        })
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No puede haber campos vacios'
      })
    }
  }


  //Eliminar noticias

  deleteNews(id: string){
    this.service.deleteNews(id).subscribe(data =>{
      console.log(data);
      Swal.fire(
        'Good job!',
        'Eliminado!',
        'success'
      ).then(function(){
        location.reload();
      })
    })
  }
}
