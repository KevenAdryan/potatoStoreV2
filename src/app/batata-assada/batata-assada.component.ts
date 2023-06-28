import { Router } from '@angular/router';
import { TransfereService } from './../services/transfere-service.service';
import { BatataService } from './../services/batata-service.service';
import { Component, OnInit } from '@angular/core';
import { Batatas } from '../interfaces/batatas.interface';

@Component({
  selector: 'app-batata-assada',
  templateUrl: './batata-assada.component.html',
  styleUrls: ['./batata-assada.component.scss'],
})
export class BatataAssadaComponent implements OnInit {
  constructor(
    private batataService: BatataService,
    public transfereService: TransfereService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getBatatas();
  }

  batatas: Batatas[] = [];

  value = '';

  getBatatas() {
    this.batataService.getBatatas2('batataAssada').subscribe((batatas: any) => {
      this.batatas = batatas;
    });
  }

  navegaDetail(id: any) {
    this.transfereService.setData(id);
    this.router.navigate(['detail']);
  }
}
