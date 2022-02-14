import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

export interface NewUserLoginData{
  firstName:string
  surname:string
  email:string
  workplace:string
  typ:number
}


@Component({
  selector: 'app-admin-add-page',
  templateUrl: './admin-add-page.component.html',
  styleUrls: ['./admin-add-page.component.scss']
})
export class AdminAddPageComponent implements OnInit {

  @Input()
  customError: string ="";

  @Output()
  newUser: EventEmitter<NewUserLoginData> = new EventEmitter()



  options = [
    { value: 'Admin', label: 'Admin' },
    { value: 'User', label: 'User' },
  ];


  showError: boolean = false;
  profileeForm = new FormGroup({
    firstName: new FormControl('',[Validators.required]),
    surname: new FormControl('',[Validators.required,]),
    email: new FormControl('',[Validators.required, Validators.email]),
    workplace: new FormControl('',Validators.required),
    typ: new FormControl('',Validators.required),
  });

   
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.showError = false
    this.customError = ""

    if(this.profileeForm.invalid){
      this.showError = true;
    }
    else{
      this.newUser.emit({
        firstName: this.profileeForm.get("firstName")!.value,
        surname:this.profileeForm.get("surname")!.value,
        email:this.profileeForm.get("email")!.value,
        workplace:this.profileeForm.get("workplace")!.value,
        typ:this.profileeForm.get("typ")!.value

      })
    }
    // TODO: Use EventEmitter with form value
    
    //console.warn(this.profileeForm.value);
  }

}
