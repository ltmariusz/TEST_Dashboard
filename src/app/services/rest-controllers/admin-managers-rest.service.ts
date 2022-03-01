import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

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
}
