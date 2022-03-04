import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { AdminManagersRestService } from '../rest-controllers/admin-managers-rest.service';

@Injectable({
  providedIn: 'root'
})
export class AdminManagersService {

  constructor(
    private adminManagersRestService: AdminManagersRestService,
  ) { }



  
  async addNewUser(name: string, surname: string, email: string, workplace: string, type: string){

    try{
      let result = await lastValueFrom(this.adminManagersRestService.postAddNewUser(name,surname,email,workplace,type))

    }catch (error){

      
    }
  }




  
}
