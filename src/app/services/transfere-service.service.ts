import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TransfereService {
  constructor() {}

  data: any;
  data2: any;

  public setData(data: any) {
    this.data = data;
  }

  public getData(): Observable<any> {
    return this.data;
  }
}
