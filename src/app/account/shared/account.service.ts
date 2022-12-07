import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccountService {
  constructor(private httpClient: HttpClient) {}

  login(email: string, senha: string): Observable<any> {
    return this.httpClient.post('http://localhost:3000/login', {
      email: email,
      password: senha,
    });
  }

  // login(email: string, senha: string): Observable<any> {
  //   return this.httpClient.post('https://potatostore-fcc99-default-rtdb.firebaseio.com/login.json', {
  //     email: email,
  //     password: senha,
  //   });
  // }
}
