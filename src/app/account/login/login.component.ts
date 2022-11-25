import { AccountService } from './../shared/account.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private accountService: AccountService) {}

  ngOnInit(): void {}

  login = {
    usuario: '',
    senha: '',
  };

  async logar() {
    try {
      const result = await this.accountService.login(this.login);
      console.log(`login efetuado: ${result}`);

      this.router.navigate(['']);
    } catch (error) {
      console.error(error);
    }
  }
}
