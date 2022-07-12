import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

constructor(
  private authSerive: AuthService,
  private router: Router
){}

  canActivate(): boolean{
    if(this.authSerive.loggedIn()){
      return true;
    }
    this.router.navigateByUrl('/login')
    return false;
  }

  
}
