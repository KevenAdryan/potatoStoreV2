import { Router } from '@angular/router';
import { TransfereService } from './../services/transfere-service.service';
import { BatataService } from './../services/batata-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pure-batata',
  templateUrl: './pure-batata.component.html',
  styleUrls: ['./pure-batata.component.scss'],
})
export class PureBatataComponent implements OnInit {
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
    this.batataService.getBatatas2('batataPure').subscribe((batatas: any) => {
      this.batatas = batatas;
    });
  }

  navegaDetail(id: any) {
    this.transfereService.setData(id);
    this.router.navigate(['detail']);
  }
}
