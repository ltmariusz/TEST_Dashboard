import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
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
    if (this.profileFormF.invalid){
      this.showErrorF=true;
    }
  
  }
}
