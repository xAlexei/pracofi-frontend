import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import {MatCardModule} from '@angular/material/card';

export interface News{
  titulo: String,
  subtittle: String,
  content: String,
  image: String
  
}

@Component({
  selector: 'app-get-news',
  templateUrl: './get-news.component.html',
  styleUrls: ['./get-news.component.css']
})
export class GetNewsComponent implements OnInit {

  public news: News[] = [];

  constructor(private newSerivce: NewsService) {

    this.newSerivce.getNew().subscribe(data =>{
      console.log(data);
    });
  }

  ngOnInit(): void {
      this.newSerivce.getNew().subscribe(
        news => this.news.push( ...news));
    }
}
