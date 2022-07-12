import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { User } from '../_models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;

  user = {};

  constructor(
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  signIn(form):void {
    this.authService.signInUser(form.value).subscribe(
      res=>{
        console.log(res);
        localStorage.setItem('token', res.token);
        this.router.navigateByUrl('/adminview')
      }
    )
  }

 

}
