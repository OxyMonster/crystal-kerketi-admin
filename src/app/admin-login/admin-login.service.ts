import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminLoginService {

  apiUrl: string = '/api/agents/'; 


  constructor(
    private http: HttpClient
  ) { }


  authorizeAgent(loginForm: Object) {

    return this.http.post(this.apiUrl + 'login', loginForm );

  }; 


}
