import { TransfereService } from './../services/transfere-service.service';
import { Router } from '@angular/router';
import { BatataService } from './../services/batata-service.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batatas',
  templateUrl: './batatas.component.html',
  styleUrls: ['./batatas.component.scss'],
})
export class BatatasComponent implements OnInit {
  constructor(
    private batataService: BatataService,
    private router: Router,
    private transfereService: TransfereService
  ) {}

  ngOnInit(): void {
    this.getBatatas();
  }

  batatas: any[] = [];
  produtos: any[] = [];

  value = '';

  getBatatas() {
    this.batataService.getBatatas().subscribe((batatas: any) => {
      this.batatas = batatas;
      this.produtos = batatas;
    });
  }

  search(e: Event): void {
    const target = e.target as HTMLInputElement;
    const value = target.value;

    this.batatas = this.produtos.filter((b) => {
      return b.nome.includes(value);
    });
  }

  navegaDetail(id: any) {
    this.transfereService.setData(id);
    this.router.navigateByUrl('detail');
  }
}
