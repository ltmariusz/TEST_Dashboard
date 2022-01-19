import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';
export interface UserForgotData{
  emailf:string
}

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  @Input()
  loading: boolean = false;
  
  @Input()
  customError: string ="";

  @Output()
  forgotClick: EventEmitter<UserForgotData> = new EventEmitter()

  showErrorF: boolean = false;
  profileFormF = new FormGroup({
    emailf: new FormControl('',[Validators.required, Validators.email])
  })


  constructor(private _location: Location) { }

  ngOnInit(): void {
  }

  btnBackClick() {
    this._location.back();
  }

  onSubmitf(){
    this.customError= ""
    this.showErrorF= false
    if (this.profileFormF.invalid){
      this.showErrorF=true;
    }
    else{
      this.forgotClick.emit({
        emailf: this.profileFormF.get("emailf")!.value
      })
    }
  
  }
}
