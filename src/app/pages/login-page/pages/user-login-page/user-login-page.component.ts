import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserLoginData } from 'src/app/components/login/login/login.component';
import { LoginService, LoginStatus } from 'src/app/services/login.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.scss']
})
export class UserLoginPageComponent implements OnInit, OnDestroy {
  loading: boolean = false;
  customError: string = "";

  constructor(private loginService: LoginService) { }
  
  ngOnDestroy(): void {
    this.loginPrecessSubscription?.unsubscribe()
  }

  ngOnInit(): void {
    this.listenLoginProcess()
  }

  getData(user: UserLoginData | undefined){
    if(user){
      this.loginService.login(user.email, user.password)
    }else{
      this.customError="Niepoprawne dane"
    }
  }

  private loginPrecessSubscription: Subscription | null = null
  private listenLoginProcess(){
    this.loginPrecessSubscription = this.loginService.loginProcessStatusSubject
    .subscribe(res => {
      switch (res) {
        case LoginStatus.PENDING:
          console.log(LoginStatus.PENDING)
          break;
        case LoginStatus.LOADING:
          console.log(LoginStatus.LOADING)
          break;
        case LoginStatus.SUCCESS:
          console.log(res)
          break;
        case LoginStatus.ERROR:
          console.log(res)
          break;
      }
    })
  }

  // getData(user: UserLoginData | undefined){
  //   if(user){
  //     console.log(user)
  //     this.loading = true
  //     //spinner
  //     this.userService.login(user.email, user.password)
  //     .then(res => {
  //       console.log("Udało się")
  //     })
  //     .catch(e => {
  //       this.customError = e
  //     })
  //     .finally(() => {
  //       this.loading = false
  //     })

  //   }else{
  //     this.customError="Niepoprawne dane"
  //   }
  // }

}
