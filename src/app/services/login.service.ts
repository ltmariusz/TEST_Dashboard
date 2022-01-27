import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
import { LoginComponent } from '../components/login/login/login.component';
import { UserControlerService } from './global/user-controller.service';
import { UserRestService } from './rest-controllers/user-rest.service';


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

  

  constructor(
    private userRestService: UserRestService, 
    private userControlerService: UserControlerService,
    ) { }

  async login(email: string, password: string){
    if(this.loginProcessStatus != LoginStatus.PENDING){return}
    this.loginProcessStatus = LoginStatus.LOADING
    //pobieranie informacji i zakończyć sukcesem
    try{
      let result = await lastValueFrom(this.userRestService.postLogin(email,password))
      if (result.body == null) {
        this.loginProcessStatus = LoginStatus.ERROR
        return
      }
      let result2 = await lastValueFrom(this.userRestService.getUserData(result.body.token))
      if(result2.body == null){
        this.loginProcessStatus = LoginStatus.ERROR
        return
      }

      this.userControlerService.setData(result2.body.name, result2.body.surnmae, result2.body.email, result.body.token, result.body.time)
      this.loginProcessStatus = LoginStatus.SUCCESS   
    }catch (error){
      this.loginProcessStatus = LoginStatus.ERROR
      throw error
    }
    
  }

  sprawdz(){
  console.log(this)
  }
}