import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: String;
  item: any;

  constructor(
    private jobsService: JobsService,
    private route : ActivatedRoute
  ) { 
    this.id = this.route.snapshot.params.get('id');
    this.getOne();
  }

  ngOnInit(): void {
  }

  getOne(){
    this.jobsService.getDetails(this.id).subscribe(data=>{
      this.item = data;
      console.log(data);
    })
  }

}
