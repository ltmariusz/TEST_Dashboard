import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import {UserRestService} from './rest-controllers/user-rest.service';

export enum LoginStatus{
 SUCCESS,
 LOADING,
 ERROR,
 PENDING
}



@Injectable({
  providedIn: 'root'
})
export class LoginService {

  loginProcessStatusSubject = new BehaviorSubject(LoginStatus.PENDING)

  private _loginProcessStatus: LoginStatus = LoginStatus.PENDING
  private get loginProcessStatus():LoginStatus{
    return this._loginProcessStatus
  }
  private set loginProcessStatus(value: LoginStatus){
    this._loginProcessStatus = value
    this.loginProcessStatusSubject.next(value)
  }

  

  constructor(private userRestService: UserRestService ) { }

  async login(email: string, password: string){
    if(this.loginProcessStatus != LoginStatus.PENDING){return}
    this.loginProcessStatus = LoginStatus.LOADING
    //pobieranie informacji i zakończyć sukcesem
    try{
      let result = await lastValueFrom(this.userRestService.postLogin(email,password))
    
    }catch{

    }
    
  }

}
