import { Router } from '@angular/router';
import { TransfereService } from './../services/transfere-service.service';
import { BatataService } from './../services/batata-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batata-frita',
  templateUrl: './batata-frita.component.html',
  styleUrls: ['./batata-frita.component.scss'],
})
export class BatataFritaComponent implements OnInit {
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
    this.batataService.getBatatas2('batataFrita').subscribe((batatas: any) => {
      this.batatas = batatas;
    });
  }

  navegaDetail(id: any) {
    this.transfereService.setData(id);
    this.router.navigate(['detail']);
  }
}
