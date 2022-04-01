import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { NewUserLoginData } from 'src/app/components/admin-add/admin-add/admin-add.component';
import { AdminManagersService } from 'src/app/services/admin-managers/admin-managers.service';
import { Subscription } from 'rxjs';

// export interface NewUserLoginData{
//   firstName:string
//   surname:string
//   email:string
//   workplace:string
//   typ:number
// }


@Component({
  selector: 'app-admin-add-page',
  templateUrl: './admin-add-page.component.html',
  styleUrls: ['./admin-add-page.component.scss']
})
export class AdminAddPageComponent implements OnInit {
  customError: string = ""
  loading: boolean = false

  // @Input()
  // customError: string ="";

  // @Output()
  // newUser: EventEmitter<NewUserLoginData> = new EventEmitter()



  // options = [
  //   { value: 'Admin', label: 'Admin' },
  //   { value: 'User', label: 'User' },
  // ];


  // showError: boolean = false;
  // profileeForm = new FormGroup({
  //   firstName: new FormControl('',[Validators.required]),
  //   surname: new FormControl('',[Validators.required,]),
  //   email: new FormControl('',[Validators.required, Validators.email]),
  //   workplace: new FormControl('',Validators.required),
  //   typ: new FormControl('',Validators.required),
  // });

   
  constructor(
    private adminManagersService: AdminManagersService,
  ) { }

  ngOnInit(): void {
  }

  // onSubmit() {
  //   this.showError = false
  //   this.customError = ""

  //   if(this.profileeForm.invalid){
  //     this.showError = true;
  //   }
  //   else{
  //     this.newUser.emit({
  //       firstName: this.profileeForm.get("firstName")!.value,
  //       surname:this.profileeForm.get("surname")!.value,
  //       email:this.profileeForm.get("email")!.value,
  //       workplace:this.profileeForm.get("workplace")!.value,
  //       typ:this.profileeForm.get("typ")!.value

  //     })
  //   }
  //   // TODO: Use EventEmitter with form value
    
  //   //console.warn(this.profileeForm.value);
  // }
//////////////////////////////////////////////////////////
  
/**
 * Pobieranie danych od urzytkownika 
 * @param user 
 */
getData(user: NewUserLoginData | undefined){
    if(user){
     this.adminManagersService.addNewUser(user.firstName, user.surname, user.email, user.workplace, user.type)
     .then(res => {
      return
     })
     .catch(e => {
      this.customError = e
     })
    }else{
      this.customError = "Niepoprawne dane"
    }

  }

  private addingUserSubscription: Subscription | null = null;
  private addingUserProcess(){
    if (this.loading){


    }
  }

}
