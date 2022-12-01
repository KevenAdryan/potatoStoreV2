import { TransfereService } from './../services/transfere-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.scss'],
})
export class PagamentoComponent implements OnInit {
  constructor(private transfereService: TransfereService) {}

  totalPedido: any;

  ngOnInit(): void {
    let data: any = this.transfereService.getData();
    
    if (data) {
      this.totalPedido = data.total;
    } else {
      this.totalPedido = 0;
    }
  }
}
