import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of, pipe } from 'rxjs';
import { NewUserLoginData } from 'src/app/components/admin-add/admin-add/admin-add.component';

export interface GetUsersListResponseBody{
  list: Array<UserData>
}

export interface UserData{
  id: number,
  firstName:string
  surname:string
  email:string
  workplace:string
  type:string
}

@Injectable({
  providedIn: 'root'
})
export class AdminManagersRestService {

  constructor(private http: HttpClient) { }

  postAddNewUser(name: string, surname: string, email: string, workplace: string, type: string):Observable<HttpResponse<String>>{
    return of(new HttpResponse({
      body: "Udało się dodać nowego użytkownika",
      status: 200,
    })).pipe(delay(200))
  }

  getUsersList():Observable<HttpResponse<GetUsersListResponseBody>> {
    return of(new HttpResponse({
      body:  {
        list: [{
          id: 1,
          firstName: "Bogdan",
          surname: "Budzynski",
          email:"budzynski@gmail.com",
          workplace: "praownik",
          type: "User"
        },{
          id: 2,
          firstName: "Mariusz",
          surname: "Lemanski",
          email:"lemanski@gmail.com",
          workplace: "informatyk",
          type: "Admin"
        },{
          id: 3,
          firstName: "Darek",
          surname: "Nierycki",
          email:"Nierycki@gmail.com",
          workplace: "pracownik",
          type: "User"
        }]
      },
      status: 200
    })).pipe(delay(200))
  }


}
