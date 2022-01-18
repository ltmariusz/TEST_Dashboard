import { Component, OnInit } from '@angular/core';
import { UserForgotData } from 'src/app/components/forgot-password/forgot-password/forgot-password.component';

@Component({
  selector: 'app-user-login-page-forgot-page',
  templateUrl: './user-login-page-forgot-page.component.html',
  styleUrls: ['./user-login-page-forgot-page.component.scss']
})
export class UserLoginPageForgotPageComponent implements OnInit {

  constructor() { }

  loading: boolean = false;
  customError: string = "";

  ngOnInit(): void {
  }

  getData(user: UserForgotData | undefined){
    if(user){
      console.log(user)
    }else{
      this.customError="Niepoprawne dane"
    }
  }

}
