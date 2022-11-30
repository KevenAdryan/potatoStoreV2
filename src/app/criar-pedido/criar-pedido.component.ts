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
    { op: 'opt0', type: 'Todas', nomeAPI: 'todas' },
    { op: 'opt1', type: 'Batata Crua', nomeAPI: 'batataCrua' },
    { op: 'opt2', type: 'Batata Assada', nomeAPI: 'batataAssada' },
    { op: 'opt3', type: 'Purê de batata', nomeAPI: 'batataPure' },
    { op: 'opt4', type: 'Batata Frita', nomeAPI: 'batataFrita' },
    { op: 'opt5', type: 'Semente de Batata', nomeAPI: 'batataSemente' },
  ];
  tipo!: string;

  value = '';
  limpaCampos: boolean = false;

  displayedColumns: string[] = [
    'id',
    'nome',
    'tipo',
    'valor',
    'quantidade',
    'total',
  ];

  batatas: Batatas[] = [];
  produtos: Batatas[] = [];

  carregaBatatas() {
    this.batataService.getBatatas().subscribe((prod: any) => {
      this.batatas = prod;
      this.produtos = prod;
    });
  }

  selecionaTipo(opcao: Event) {
    let t = String(opcao);
    let tipoOP: any[] = [];
    let tipo: string = '';

    tipoOP = this.opcoes.filter((opt) => opt.op == t);

    tipoOP.forEach((i) => {
      tipo = i.nomeAPI;
      this.tipo = i.nome;
    });

    if (tipo == 'todas') {
      this.batatas = this.produtos;
    } else {
      this.batatas = this.produtos.filter((t) => t.tipo == tipo);
    }
  }

  search(letras: Event): void {
    const target = letras.target as HTMLInputElement;
    let value = target.value;

    this.batatas = this.produtos.filter((b) => {
      return b.nome.includes(value);
    });
  }

  addQTD(prod: object) {}

  subQTD(prod: object) {}

  somaPagar() {}

  fechaPedido() {}

  openDialog() {}
}
