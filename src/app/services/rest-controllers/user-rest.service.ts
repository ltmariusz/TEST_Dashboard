import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface PostLoginResponseBody{
  token: string,
  time: Date
}

export interface GetUserResponseData{
  name: string,
  surnmae: string,
  email: string,
}

@Injectable({
  providedIn: 'root'
})
export class UserRestService {

  constructor(private http: HttpClient) { }

  postLogin(email:string, password: string):Observable<HttpResponse<PostLoginResponseBody>>{
    return of(new HttpResponse({
      body:{
        token: "73fd881a-2347-4307-86fd-a0a113e20692",
        time: new Date()
      },
      status: 200,
    }))
  }

  getUserData():Observable<HttpResponse<GetUserResponseData>>{
    return of(new HttpResponse({
      body:{
        name: "Arkadiusz",
        surnmae: "Bryska",
        email: "arkadiusz.bryska@daw-systems.pl",
      },
      status: 200,
    }))
  }
}
