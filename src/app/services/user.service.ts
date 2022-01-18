import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  login(email: string, password:string):Promise<string>{
    return new Promise((resolve, reject) => {
      let result = true

      if(result){
        setTimeout(function(){
          resolve("Ready")
        }, 5000);
      }else{
        reject("Not working")
      }
    })
  }
  Forgot(){

  }
}
