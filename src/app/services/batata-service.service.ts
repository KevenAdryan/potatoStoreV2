import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BatataService {
  constructor(private http: HttpClient) {}

  getBatata(): Observable<any> {
    return this.http.get('http://localhost:3000/produtosAll');
  }
}
