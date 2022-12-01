import { BatataService } from './../services/batata-service.service';
import { TransfereService } from './../services/transfere-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  constructor(
    public transfereService: TransfereService,
    public batataService: BatataService
  ) {}

  ngOnInit(): void {
    let data = Number(this.transfereService.getData());

    if (data) {
      this.id = data;
    } else {
      this.id = -1;
    }

    this.batataService.getBatataId(this.id).subscribe((batata) => {
      this.img = batata.url;
      this.valor = batata.valor;
      this.nome = batata.nome;
    });
  }

  id: any;
  img: string = '';
  valor: number = 0;
  nome: string = '';
}
