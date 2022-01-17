import { Component, OnInit } from '@angular/core';
import { UserLoginData } from 'src/app/components/login/login/login.component';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.scss']
})
export class UserLoginPageComponent implements OnInit {

  constructor() { }

  loading: boolean = false;
  customError: string = "";


  ngOnInit(): void {
  }

  getData(user: UserLoginData | undefined){
    console.log(user)
  }

}
