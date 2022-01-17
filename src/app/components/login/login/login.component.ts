import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
//import { timeStamp } from 'console';
export interface UserLoginData{
  email:string
  password:string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @Input()
  loading: boolean = false;
  
  @Input()
  customError: string ="";

  @Output()
  loginClick: EventEmitter<UserLoginData> = new EventEmitter()

  showError: boolean = false;
  profileForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
    //aliases: this.
  });

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit() {
      console.log(this.loading)
      console.log(this.customError)

    if (this.profileForm.invalid) {
      this.showError = true;
    }
    else{
      this.loginClick.emit({
        email: this.profileForm.get("email")!.value,
        password:this.profileForm.get("password")!.value
      })
    }
  }
}
