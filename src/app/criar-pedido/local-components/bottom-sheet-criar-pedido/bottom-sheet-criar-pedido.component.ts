import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import {
    MatBottomSheetRef,
    MAT_BOTTOM_SHEET_DATA,
} from '@angular/material/bottom-sheet';
import { Batatas } from 'src/app/interfaces/batatas.interface';

@Component({
    selector: 'app-bottom-sheet-criar-pedido',
    templateUrl: './bottom-sheet-criar-pedido.component.html',
    styleUrls: ['./bottom-sheet-criar-pedido.component.scss'],
})
export class BottomSheetCriarPedidoComponent implements OnInit {
    constructor(
        public bottomSheetRef: MatBottomSheetRef<BottomSheetCriarPedidoComponent>,
        @Inject(MAT_BOTTOM_SHEET_DATA) public data: any
    ) {}

    batatas: Batatas[] = [];
    totalPedido: number = 0;

    ngOnInit(): void {
        this.batatas = this.data.batatas;
        this.totalPedido = this.data.total;
    }

    finalizaPedido() {
        if (this.batatas && this.totalPedido) {
            this.bottomSheetRef.dismiss('OK');
        } else {
            this.bottomSheetRef.dismiss('NOT OK');
        }
    }

    fechabottomSheet() {
        this.bottomSheetRef.dismiss();
    }
}
