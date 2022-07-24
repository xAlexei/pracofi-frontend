import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import { ActivatedRoute } from '@angular/router';
import { TrackHttpError } from '../shared/model/trackHttpError';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Jobs } from '../jobs';

@Component({
  selector: 'app-vacancy',
  templateUrl: './vacancy.component.html',
  styleUrls: ['./vacancy.component.css']
})
export class VacancyComponent implements OnInit {

  topHeadingDisplay: any = [];

  constructor(private jobService: JobsService, private route: ActivatedRoute, private location: Location) {
    this.jobService.getJobs().subscribe((result)=>{
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
