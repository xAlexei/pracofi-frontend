import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import { ActivatedRoute } from '@angular/router';
import { TrackHttpError } from '../shared/model/trackHttpError';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Jobs } from '../jobs';


@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html',
    styleUrls: ['./landing.component.scss']
})

export class LandingComponent implements OnInit {
  focus: any;
  focus1: any;

  topHeadingDisplay: any = [];

  constructor(private jobService: JobsService, private route: ActivatedRoute, private location: Location) { 
    //Obtener noticias
    
  }

  ngOnInit() {}

}
