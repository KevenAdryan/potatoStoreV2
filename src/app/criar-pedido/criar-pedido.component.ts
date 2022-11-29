import { BatataService } from './../services/batata-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Batatas } from '../interfaces/batatas';

@Component({
  selector: 'app-criar-pedido',
  templateUrl: './criar-pedido.component.html',
  styleUrls: ['./criar-pedido.component.scss'],
})
export class CriarPedidoComponent implements OnInit {
  constructor(public batataService: BatataService) {}

  ngOnInit(): void {
    this.carregaBatatas();
  }

  disabled = false;

  opcoes: any[] = [
    { op: 'opt1', type: 'Batata Crua' },
    { op: 'opt2', type: 'Batata Assada' },
    { op: 'opt3', type: 'Purê de batata' },
    { op: 'opt4', type: 'Batata Frita' },
    { op: 'opt5', type: 'Semente de Batata' },
  ];

  value = '';

  displayedColumns: string[] = [
    'id',
    'nome',
    'tipo',
    'valor',
    'quantidade',
    'total',
  ];

  batatas: Batatas[] = [];

  carregaBatatas() {
    this.batataService.getBatatas().subscribe((prod: any) => {
      this.batatas = prod;
    });
  }

  selecionaTipo(o: Event) {}

  onChangeDemo(ob: MatCheckboxChange) {
    if (ob.checked) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
  }

  search(e: Event): void {}

  addQTD(prod: object) {}

  subQTD(prod: object) {}

  somaPagar() {}

  fechaPedido(){}

  openDialog(){}
}
