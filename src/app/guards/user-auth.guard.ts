import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { lastValueFrom, Observable } from 'rxjs';
import { UserControlerService } from '../services/global/user-controller.service';
import { UserRestService } from '../services/rest-controllers/user-rest.service';

@Injectable({
  providedIn: 'root'
})

export class UserAuthGuard implements CanActivate, CanLoad, CanActivateChild {

constructor(
  private userControlerService: UserControlerService,
  private userRestService: UserRestService,
  private router: Router){ }

  canActivateChild(
    childRoute: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot
    ): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      console.log("canActivateChild")
      return this.check();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("canActivate")
    return this.check();
  }

  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      console.log("canLoad")
      return this.check();
  }


  private check():Promise<boolean>{
    return new Promise(async(resolve, reject) => {
      //1)wez token 
      try {
        var token = this.userControlerService.getToken()
        if(token == null){
          // nawiduj do login page
          this.router.navigateByUrl('/login')
          return resolve(false)
        }
        var sprw = await lastValueFrom(this.userRestService.getUserData(token))
        if(sprw.body == null){
          this.router.navigateByUrl('/login')
          return resolve(false)
        }
        this.userControlerService.setShortData(sprw.body.name, sprw.body.surnmae, sprw.body.email)
        return resolve(true)
      } catch (error) {
        reject(error) 
      }


    })

    
    //2)jesli jest null return false
         // if(token == null){return false} 
    //3)pobierz dane o urzytkowniku 
         //  this.userRestService.getUserData(token)
    //4)umiescic w userGc return true

    //w razie niepowodzenia przejdz na strone logowania 


  }
}
