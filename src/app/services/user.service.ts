import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  /**
   * Laduje email i hasło
   * @param email 
   * @param password 
   * @returns opdpowiedź serwera 
   */
  login(email: string, password: string): Promise<string> {
    return new Promise((resolve, reject) => {
      let result = true

      if (result) {

        setTimeout(function () {
          resolve("Ready")
        }, 5000);
      } else {
        reject("Not working")
      }
    })
  }

  /**
   * Laduje zapomniany email
   * @param emailf 
   * @returns 
   */
  loginf(emailf: string): Promise<string> {
    return new Promise((resolve, reject) => {
      let result = true

      if (result) {

        setTimeout(function () {
          resolve("Ready")
        }, 5000);
      } else {
        reject("Not working")
      }
    })
  }
  // console.log("przed")
  // login("a@a.pl", "abc123")
  // .then(res => {
  //   console.log(res)
  // }).catch(e => {
  //   console.log(e)
  // })
  // console.log("po")


  // login("a@a","sss"){

  // }


}
