import { Component, OnInit } from '@angular/core';
import { TrackHttpError } from '../shared/model/trackHttpError';
import { ActivatedRoute } from '@angular/router';
import { NewsService } from '../services/news.service';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { News } from '../news';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-details-news',
  templateUrl: './details-news.component.html',
  styleUrls: ['./details-news.component.css']
})
export class DetailsNewsComponent implements OnInit {
  
  id: String;
  item: any;
  constructor(
    private newSerivce: NewsService, 
    private route:ActivatedRoute, 
    private location:Location) {
        this.id = this.route.snapshot.paramMap.get('id');
        this.getOne();
   }

  ngOnInit(): void { }

 getOne(){
  this.newSerivce.getDetails(this.id).subscribe(data =>{
    this.item = data;
    console.log(data);
  })
 }

 
}
