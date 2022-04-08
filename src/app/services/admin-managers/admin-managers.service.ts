import { Injectable } from '@angular/core';
import { BehaviorSubject, lastValueFrom } from 'rxjs';
//import { resourceLimits } from 'worker_threads';
import { AdminManagersRestService, UserData } from '../rest-controllers/admin-managers-rest.service';


export enum AdminStatus{
  SUCCESS,
  LOADING,
  ERROR,
  PENDING
 }


@Injectable({
  providedIn: 'root'
})
export class AdminManagersService {


  /**
   * CO KONKRETNIE SIE TUTAJ DZIEJE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
   */
  adminProcessStatusSubject = new BehaviorSubject(AdminStatus.PENDING)

  private _adminProcessStatus: AdminStatus = AdminStatus.PENDING
  private get adminProcessStatus():AdminStatus{
    return this._adminProcessStatus
  }
  private set adminProcessStatus(value: AdminStatus){
    this._adminProcessStatus = value
    this.adminProcessStatusSubject.next(value)
  }
 

  
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
    //jesli oczekujemy ma klikniecie przycisku to prgram ma się nie wykonywać
    if(this.adminProcessStatus != AdminStatus.PENDING){return}
    this.adminProcessStatus = AdminStatus.LOADING

    try{
      let result = await lastValueFrom(this.adminManagersRestService.postAddNewUser(name,surname,email,workplace,type))
      if(result.body == null)
      {
        this.adminProcessStatus= AdminStatus.ERROR
        return
      }

      this.adminProcessStatus = AdminStatus.SUCCESS

      // testowanie pobierania danych z formularza
      // console.log(result.body)
      // console.log(name)
    }catch (error){
      console.log(error)
      this.adminProcessStatus = AdminStatus.ERROR
    }
  }

/**
 * wyświetlanie urzytkowników w komponencie "admin/list"
 * @returns 
 */
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
 * przypisanie danych do wyświetlanej tablicy z aktualnymi zarejestrowanymi goscmi "admin/dodawanie"
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
