import { Router } from '@angular/router';
import { TransfereService } from './../services/transfere-service.service';
import { BottomSheetCriarPedidoComponent } from './local-components/bottom-sheet-criar-pedido/bottom-sheet-criar-pedido.component';
import { BatataService } from './../services/batata-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';
import { Batatas } from '../interfaces/batatas';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-criar-pedido',
  templateUrl: './criar-pedido.component.html',
  styleUrls: ['./criar-pedido.component.scss'],
})
export class CriarPedidoComponent implements OnInit {
  constructor(
    public batataService: BatataService,
    private bottomSheet: MatBottomSheet,
    public transfereService: TransfereService,
    public router: Router
  ) {}

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
  produtos2: Batatas[] = [];

  totalPedido: number = 0;

  carregaBatatas() {
    this.batataService.getBatatas().subscribe((prod: any) => {
      this.batatas = prod;
      this.produtos = prod;
      this.produtos2 = prod;
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
      this.batatas = this.produtos2;
    } else {
      this.batatas = this.produtos2.filter((t) => t.tipo == tipo);
      this.produtos = this.batatas;
    }
  }

  search(letras: Event): void {
    const targ = letras.target as HTMLInputElement;
    let val = targ.value;

    this.batatas = this.produtos.filter((b) => {
      return b.nome.includes(val);
    });
  }

  addQTD(prod: Batatas) {
    const batata = this.produtos.filter((o) => o.id == prod.id);

    batata.forEach((produto) => {
      produto.qtd++;
    });

    let valPagItem: any;
    valPagItem = Number(prod.valor * prod.qtd).toFixed(2);

    batata.forEach((item) => {
      item.total = valPagItem;
    });
  }

  alteraTotal(val: Event, prod: Batatas): void {
    const target = val.target as HTMLInputElement;
    let value = Number(target.value);

    const batata = this.produtos.filter((o) => o.id == prod.id);

    batata.forEach((produto) => {
      produto.qtd = value;
    });

    let valPagItem: any;
    valPagItem = Number(prod.valor * prod.qtd).toFixed(2);

    batata.forEach((item) => {
      item.total = valPagItem;
    });
  }

  subQTD(prod: Batatas) {
    const batata = this.produtos.filter((o) => o.id == prod.id);

    batata.forEach((produto) => {
      if (produto.qtd <= 0) {
        produto.qtd = 0;
      } else {
        produto.qtd--;
      }
    });

    let valPagItem: any;
    valPagItem = Number(prod.valor * prod.qtd).toFixed(2);

    batata.forEach((item) => {
      item.total = valPagItem;
    });
  }

  somaPagar() {
    let aPagar: number[] = [];

    const batatas = this.produtos.filter((o) => o.total > 0);

    batatas.forEach((item) => {
      aPagar.push(Number(item.total));
    });

    const result = aPagar.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0);

    const resultado = result.toFixed(2);

    this.totalPedido = Number(resultado);

    return resultado;
  }

  fechaPedido() {
    const batatas = this.produtos.filter((o) => o.total > 0);

    this.bottomSheet
      .open(BottomSheetCriarPedidoComponent, {
        data: { batatas: batatas, total: this.totalPedido },
      })
      .afterDismissed()
      .subscribe((res) => {
        if (res === 'OK') {
          this.transfereService.setData({
            batatas: batatas,
            total: this.totalPedido,
          });

          this.router.navigateByUrl('pagamento');
        }
      });
  }
}
