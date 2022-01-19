import { Component, OnInit } from '@angular/core';
import { UserForgotData } from 'src/app/components/forgot-password/forgot-password/forgot-password.component';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login-page-forgot-page',
  templateUrl: './user-login-page-forgot-page.component.html',
  styleUrls: ['./user-login-page-forgot-page.component.scss']
})
export class UserLoginPageForgotPageComponent implements OnInit {

  constructor(private userService: UserService) { }

  loading: boolean = false;
  customError: string = "";

  ngOnInit(): void {
  }

  getData(user: UserForgotData | undefined) {
    if (user) {
      console.log(user)
      this.loading = true

      this.userService.loginf(user.emailf)
        .then(res => {
          console.log("Udało się")
        })
        .catch(e => {
          this.customError = e
        })
        .finally(() => {
          this.loading = false;
        })

    } else {
      this.customError = "Niepoprawne dane"
    }
  }

}
