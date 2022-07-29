import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import { NewsService } from '../services/news.service';
import { ActivatedRoute } from '@angular/router';
import { EmailService } from '../services/email.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  
  id: string;
  item: any;

  constructor(
    private jobsService: JobsService,
    private newService: NewsService,
    private emaiLService: EmailService,
    private route : ActivatedRoute
  ) { 
      this.id = this.route.snapshot.paramMap.get('id');
      this.getOne();
  }

  ngOnInit(): void {
  }

  getOne() {
    this.jobsService.getDetails(this.id).subscribe( data =>{
      this.item = data;
      console.log(data);
    })
  }

  contactForm(form){
    this.emaiLService.sendMessage(form).subscribe((data)=>{
      Swal.fire(
        'Enviado!',
        'Nos pondremos en contacto!',
        'success'
      ).then(function(){
        location.reload();
      })
    })
  }

}
