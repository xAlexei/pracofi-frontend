import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';
import { ActivatedRoute } from '@angular/router';
import { TrackHttpError } from '../shared/model/trackHttpError';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { News } from '../news';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-get-news',
  templateUrl: './get-news.component.html',
  styleUrls: ['./get-news.component.css']
})
export class GetNewsComponent implements OnInit {

  topHeadingDisplay:any = [];

  constructor(
    private newSerivce: NewsService, 
    private route:ActivatedRoute, 
    private location:Location) {
    //Obtener las noticias
    this.newSerivce.getNew().subscribe((result)=>{
      console.log(result);
      this.topHeadingDisplay = result;      
    })
  }

  ngOnInit(): void {
 
    }

    onGoBack():void{
      this.location.back();
    }
}
