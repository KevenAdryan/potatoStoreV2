import { BatataService } from './../services/batata-service.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batatas',
  templateUrl: './batatas.component.html',
  styleUrls: ['./batatas.component.scss'],
})
export class BatatasComponent implements OnInit {
  constructor(private batataService: BatataService) {}

  ngOnInit(): void {
    this.getBatatas();
  }

  batatas: any[] = [];
  produtos: any[] = [];

  value = '';

  getBatatas() {
    this.batataService.getBatata().subscribe((batatas: any) => {
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
}
