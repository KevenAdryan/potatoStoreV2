import { Router } from '@angular/router';
import { TransfereService } from './../services/transfere-service.service';
import { BatataService } from './../services/batata-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batata-crua',
  templateUrl: './batata-crua.component.html',
  styleUrls: ['./batata-crua.component.scss'],
})
export class BatataCruaComponent implements OnInit {
  constructor(
    private batataService: BatataService,
    public transfereService: TransfereService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.getBatatas();
  }

  batatas: any[] = [];

  value = '';

  getBatatas() {
    this.batataService.getBatatas2('batataCrua').subscribe((batatas: any) => {
      this.batatas = batatas;
    });
  }

  navegaDetail(id: any) {
    this.transfereService.setData(id);
    this.router.navigate(['detail']);
  }

  //batataCrua
}
