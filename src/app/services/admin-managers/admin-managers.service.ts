import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { resourceLimits } from 'worker_threads';
import { AdminManagersRestService } from '../rest-controllers/admin-managers-rest.service';



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



  
  async addNewUser(name: string, surname: string, email: string, workplace: string, type: string){

    try{
      let result = await lastValueFrom(this.adminManagersRestService.postAddNewUser(name,surname,email,workplace,type))
      console.log(result.body)
      console.log(name)
    }catch (error){
      console.log(error)
      
    }
  }


  //Nowa funkcja ktora bedzie obierac dane od Rest servica, nadawac je do zmiennej 
  //a nastpenie  przekierowywac do komponentu który bedzie wyswietlal te dane
  //za pomoca NgFor (w zaleznosci od rekordow)
  // async list(id: number, firstName: string, surname: string, email: string, workplace: string, type: string){
  async list(){
    try{
      let result = await lastValueFrom(this.adminManagersRestService.getUsersList())
      return result.body?.list
    }
    catch(error){
      console.log(error)
      return 
    }

  }

  setData(id: number, firstName: string, surName: string, email: string, workplace: string, type: string){
    this.id = id
    this.firstName = firstName
    this.surName = surName
    this.email = email
    this.workplace = workplace
    this.type= type


  }

  
}
