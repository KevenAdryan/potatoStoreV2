import { BatataService } from './../services/batata-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-batata-crua',
  templateUrl: './batata-crua.component.html',
  styleUrls: ['./batata-crua.component.scss'],
})
export class BatataCruaComponent implements OnInit {
  constructor(private batataService: BatataService) {}

  ngOnInit(): void {
    this.getBatatas();
  }

  batatas: any[] = [];
  produtos: any[] = [];

  value = '';

  getBatatas() {
    this.batataService.getBatatas().subscribe((batatas: any) => {
      this.batatas = batatas.filter(
        (batata: any) => batata.tipo == 'batataCrua'
      );

      this.produtos = this.batatas;
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
