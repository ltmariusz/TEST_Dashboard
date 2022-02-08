import { ThrowStmt } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { Data } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class UserControlerService {
  //zminnne
  private name?: string
  private surname?: string
  private email?: string
  private token?: string 
  private time?: Data
  
  constructor() { }

  //getData który będzie zwracał dane 

//funkcja
setShortData(name: string, surname: string, email: string){
  this.name = name
  this.surname = surname
  this.email = email
}

setData(name: string, surname: string, email: string, token: string, time: Date){
  this.name = name
  this.surname = surname
  this.email = email
  this.token = token
  this.time = time
}

getName():string | undefined{
  return this.name
}

getSurname():string | undefined{
  return this.surname
}

getEmail():string | undefined {
  return this.email
}

getToken():string | undefined{
return this.token
}



}
