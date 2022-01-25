import { Injectable } from '@angular/core';
import { Data } from '@angular/router';
import { LoginStatus } from '../login.service';


@Injectable({
  providedIn: 'root'
})
export class UserControlerService {
  //zminnne
  name?: string
  surname?: string
  email?: string
  token?: string 
  time?: Data
  
  constructor() { }





//funkcja
SetData(name: string, surname: string, email: string, token: string, time: string){
  if(LoginStatus.SUCCESS)
return 
}
//console.log(surname)

}
