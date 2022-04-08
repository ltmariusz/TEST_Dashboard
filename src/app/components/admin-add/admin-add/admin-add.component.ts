import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';


export interface NewUserLoginData{
  firstName:string
  surname:string
  email:string
  workplace:string
  type:string
}



@Component({
  selector: 'app-admin-add',
  templateUrl: './admin-add.component.html',
  styleUrls: ['./admin-add.component.scss']
})
export class AdminAddComponent implements OnInit {


  @Input()
  customError: string ="";


  @Input()
  loading: boolean = false;
  
  // @Input()
  // reset: boolean = false; // zmienna odpowiadajaca za restowanie formularza

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
    type: new FormControl('',Validators.required),
  });


  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.showError = false
    this.customError = ""



    /**
     * Funkcja pobierania danych z formularza
     */
    if(this.profileeForm.invalid){
      this.showError = true;
    }
    else{
      this.newUser.emit({
        firstName: this.profileeForm.get("firstName")!.value,
        surname:this.profileeForm.get("surname")!.value,
        email:this.profileeForm.get("email")!.value,
        workplace:this.profileeForm.get("workplace")!.value,
        type:this.profileeForm.get("type")!.value
      })
      this.profileeForm.reset()
    }
    // TODO: Use EventEmitter with form value
    //console.warn(this.profileeForm.value);
  }

}
