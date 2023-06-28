import { Router } from '@angular/router';
import { TransfereService } from './../services/transfere-service.service';
import { BottomSheetCriarPedidoComponent } from './local-components/bottom-sheet-criar-pedido/bottom-sheet-criar-pedido.component';
import { BatataService } from './../services/batata-service.service';
import { Component, OnInit } from '@angular/core';
import { Batatas } from '../interfaces/batatas.interface';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Opcoes } from '../interfaces/opcoes.interface';

@Component({
    selector: 'app-criar-pedido',
    templateUrl: './criar-pedido.component.html',
    styleUrls: ['./criar-pedido.component.scss'],
})
export class CriarPedidoComponent implements OnInit {
    constructor(
        public batataService: BatataService,
        public bottomSheet: MatBottomSheet,
        public transfereService: TransfereService,
        public router: Router
    ) {}

    ngOnInit(): void {
        this.carregaBatatas();
    }

    disabled = false;

    opcoes: Opcoes[] = [
        { op: 'opt0', type: 'Todas', nomeAPI: 'todas' },
        { op: 'opt1', type: 'Batata Crua', nomeAPI: 'batataCrua' },
        { op: 'opt2', type: 'Batata Assada', nomeAPI: 'batataAssada' },
        { op: 'opt3', type: 'Purê de batata', nomeAPI: 'batataPure' },
        { op: 'opt4', type: 'Batata Frita', nomeAPI: 'batataFrita' },
        { op: 'opt5', type: 'Semente de Batata', nomeAPI: 'batataSemente' },
    ];

    tipo!: string | undefined;

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

    selecionaTipo(opcao: string) {
        let tipoOP;
        let tipo: string | undefined;

        tipoOP = this.opcoes.filter((opt) => opt.op == opcao).shift();

        tipo = tipoOP?.nomeAPI;
        this.tipo = tipoOP?.type;

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
        const batata = this.produtos.filter((o) => o.id == prod.id).shift();

        batata!.qtd++;
        batata!.total = Number((prod.valor * prod.qtd).toFixed(2));
    }

    subQTD(prod: Batatas) {
        const batata = this.produtos.filter((o) => o.id == prod.id).shift();

        if (batata!.qtd <= 0) {
            batata!.qtd = 0;
        } else {
            batata!.qtd--;
        }

        batata!.total = Number((prod.valor * prod.qtd).toFixed(2));
    }

    alteraTotal(val: any, prod: Batatas) {
        let valor = Number(val.value);
        const batata = this.produtos.filter((o) => o.id == prod.id).shift();

        batata!.qtd = valor;
        batata!.total = Number((prod.valor * prod.qtd).toFixed(2));
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

        this.totalPedido = Number(result.toFixed(2));

        return this.totalPedido;
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

                    this.router.navigate(['pagamento']);
                }
            });
    }
}
