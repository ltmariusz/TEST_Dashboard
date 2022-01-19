import { Component, OnInit } from '@angular/core';
import { UserLoginData } from 'src/app/components/login/login/login.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login-page',
  templateUrl: './user-login-page.component.html',
  styleUrls: ['./user-login-page.component.scss']
})
export class UserLoginPageComponent implements OnInit {

  constructor(private userService: UserService) { }

  loading: boolean = false;
  customError: string = "";


  ngOnInit(): void {
  }

  getData(user: UserLoginData | undefined){
    if(user){
      console.log(user)
      this.loading = true
      //spinner
      this.userService.login(user.email, user.password)
      .then(res => {
        console.log("Udało się")
      })
      .catch(e => {
        this.customError = e
      })
      .finally(() => {
        this.loading = false
      })

    }else{
      this.customError="Niepoprawne dane"
    }
  }

}
