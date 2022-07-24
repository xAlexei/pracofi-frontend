import { Component, OnInit } from '@angular/core';
import { JobsService } from '../services/jobs.service';
import { Jobs } from '../jobs';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-bolsa',
  templateUrl: './bolsa.component.html',
  styleUrls: ['./bolsa.component.css']
})
export class BolsaComponent implements OnInit {

  news: object;
  newsForm;
  constructor(
    private jobsService: JobsService,
    private form: FormBuilder,
  ) {
    this.newsForm = this.form.group({
      vacancy: '',
      description: '',
      time: '',
      requiriments: '',
      salary: ''
  });
   }

  ngOnInit(): void {
  }

  onSubmit(f){
    if(f){
      console.log('Registrado', f);
      this.jobsService.addJob(f).subscribe((data: any[])=>{
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

}
