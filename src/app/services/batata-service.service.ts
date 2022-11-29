import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Batatas } from '../interfaces/batatas';

@Injectable({
  providedIn: 'root',
})
export class BatataService {
  constructor(private http: HttpClient) {}

  getBatatas(): Observable<Batatas> {
    return this.http.get<Batatas>('http://localhost:3000/produtosAll');
  }

  getBatataId(id: number): Observable<Batatas> {
    return this.http.get<Batatas>(`http://localhost:3000/produtosAll/${id}`);
  }
}
