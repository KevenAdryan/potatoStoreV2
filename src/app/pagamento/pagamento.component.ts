import { TransfereService } from './../services/transfere-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

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

      if (true) {
        for (let i = 1; i < 11; i++) {
          let calc = 50 / i;

          this.parcelas.push(i + 'x de R$' + calc.toFixed(2));
        }
      }
    }
  }

  parcelas: any[] = [];

  totalPedido: any;

  tipoCartao: any[] = [
    { value: 'op1', viewValue: 'Crédito' },
    { value: 'op2', viewValue: 'Débito' },
  ];

  tipPayCard: string = '';

  formCardPay = new FormGroup({
    tipCard: new FormControl(),
    nomeCard: new FormControl(),
    numCard: new FormControl(),
    selParcelas: new FormControl(),
  });

  finalizaPedido() {
    //this.formCardPay.controls.tipCard.setValue(this.tipPayCard);
    const card = this.formCardPay.get('tipCard')?.value;
    const nome = this.formCardPay.get('nomeCard')?.value;
    const num = this.formCardPay.get('numCard')?.value;
    const parcela = this.formCardPay.get('selParcelas')?.value;

    console.log(card);
    console.log(nome);
    console.log(num);
    console.log(parcela);
    console.log(this.parcelas[parcela]);
    
  }
}
