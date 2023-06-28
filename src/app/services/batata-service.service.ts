import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Batatas } from '../interfaces/batatas.interface';

@Injectable({
  providedIn: 'root',
})
export class BatataService {
  constructor(private http: HttpClient) {}

  getBatatas(): Observable<Batatas> {
    return this.http.get<Batatas>('http://localhost:3000/produtosAll');
  }

  getBatatas2(param: any): Observable<Batatas[]> {
    let val;
    if (param == '') {
      val = this.http.get<Batatas[]>('http://localhost:3000/produtosAll');
    } else {
      val = this.http.get<Batatas[]>(`http://localhost:3000/produtosAll?tipo=${param}`);
    }

    return val;
  }

  getBatataId(id: number): Observable<Batatas> {
    return this.http.get<Batatas>(`http://localhost:3000/produtosAll/${id}`);
  }
}
