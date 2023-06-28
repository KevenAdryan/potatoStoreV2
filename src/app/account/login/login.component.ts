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
    email: '',
    senha: '',
  };

  logar() {
    this.accountService.login(this.login.email, this.login.senha).subscribe({
      next: (auth) => {
        window.localStorage.setItem('token', JSON.stringify(auth.accessToken));
        this.router.navigate(['']);
      },
      error: (error) => {
        alert('Usuário ou senha inválido.');
        console.error(error);
      },
    });
  }
}
