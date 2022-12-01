import { TransfereService } from './../services/transfere-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss'],
})
export class PagamentoComponent implements OnInit {
  constructor(private transfereService: TransfereService) {}

  ngOnInit(): void {
    let data: any = this.transfereService.getData();

    if (data) {
      this.totalPedido = data.total;
    } else {
      this.totalPedido = 0;
    }
  }

  totalPedido: any;

  tipoCartao: any[] = [
    { value: 'op1', viewValue: 'Crédito' },
    { value: 'op2', viewValue: 'Débito' },
  ];
}
