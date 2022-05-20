import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { LoginDetailService } from '../services/login-detail.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(
    private loginService:LoginDetailService,
    private router:Router
  ){}
  
  canActivate(
    
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      console.log(this.loginService.isLoggedIn)
      if(this.loginService.isLoggedIn && this.loginService.userType==="admin"){
        // if()
        
        console.log('guard true')
        return true
      }
      else{
        console.log('guard false')
        this.router.navigate(['./unauth'])
        return false
      }
  }
}
