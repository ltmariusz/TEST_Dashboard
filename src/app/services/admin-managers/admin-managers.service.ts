import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminManagersService {

  constructor() { }


  async addNewUser(name: string, surname: string, email: string, workplace: string, type: string){

    try{
      let result = await lastValueFrom()

    }catch (error){

      
    }
  }




  
}
