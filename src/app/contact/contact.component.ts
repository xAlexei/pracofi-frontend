import { Component, OnInit } from '@angular/core';
import { EmailService } from '../services/email.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  focus: any;
  focus1: any;

  constructor(
    private emailService: EmailService

  ) { }

  ngOnInit(): void {
  }

  contactForm(form){
    this.emailService.sendMailContact(form).subscribe((data)=>{
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
