import { Router } from '@angular/router';
import { TransfereService } from './../services/transfere-service.service';
import { BatataService } from './../services/batata-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-semente-batata',
  templateUrl: './semente-batata.component.html',
  styleUrls: ['./semente-batata.component.scss'],
})
export class SementeBatataComponent implements OnInit {
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
    this.batataService.getBatatas2('batataSemente').subscribe((batatas: any) => {
      this.batatas = batatas;
    });
  }

  navegaDetail(id: any) {
    this.transfereService.setData(id);
    this.router.navigate(['detail']);
  }
}
