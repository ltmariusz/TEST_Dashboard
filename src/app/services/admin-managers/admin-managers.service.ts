import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
//import { resourceLimits } from 'worker_threads';
import { AdminManagersRestService, UserData } from '../rest-controllers/admin-managers-rest.service';



@Injectable({
  providedIn: 'root'
})
export class AdminManagersService {

  private id?: number
  private firstName?: string
  private surName?: string
  private email?: string
  private workplace?: string
  private type?: string


  
  constructor(
    private adminManagersRestService: AdminManagersRestService,
  ) { }



  /**
   * Dodawanie nowego urzytkownika do tablicy "admin/lista"
   * @param name 
   * @param surname 
   * @param email 
   * @param workplace 
   * @param type 
   */
  async addNewUser(name: string, surname: string, email: string, workplace: string, type: string){

    try{
      let result = await lastValueFrom(this.adminManagersRestService.postAddNewUser(name,surname,email,workplace,type))
      console.log(result.body)
      console.log(name)
    }catch (error){
      console.log(error)
      
    }
  }

  listV2():Promise<Array<UserData>>{
    return new Promise(async (resolve, reject) =>{
      try {
        let result = await lastValueFrom(this.adminManagersRestService.getUsersList())
        if (result.body) {
          resolve(result.body.list)
        }else{
          reject("Błąd parsowania danych")
        }
      } catch (error) {
        reject(error)
      }
    })
  }
/**
 * przypisanie danych do wyświetlanej tablicy z aktualnymi zarejestrowanymi goscimi "admin/dodawanie"
 * @param id 
 * @param firstName 
 * @param surName 
 * @param email 
 * @param workplace 
 * @param type 
 */
  setData(id: number, firstName: string, surName: string, email: string, workplace: string, type: string){
    this.id = id
    this.firstName = firstName
    this.surName = surName
    this.email = email
    this.workplace = workplace
    this.type= type


  }

  
}
