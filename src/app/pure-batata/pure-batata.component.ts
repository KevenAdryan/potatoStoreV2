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
  produtos: any[] = [];

  value = '';

  getBatatas() {
    this.batataService.getBatatas().subscribe((batatas: any) => {
      this.batatas = batatas.filter(
        (batata: any) => batata.tipo == 'batataPure'
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

  navegaDetail(id: any) {
    this.transfereService.setData(id);
    this.router.navigateByUrl('detail');
  }
}
