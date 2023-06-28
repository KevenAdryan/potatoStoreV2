import { AccountService } from './../shared/account.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { CUSTOM_ELEMENTS_SCHEMA, DebugElement } from '@angular/core';
import { of, throwError } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/compiler';
import { Router } from '@angular/router';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let authService: AccountService;

  let router = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientModule, FormsModule],
      providers: [AccountService, { provide: Router, useValue: router }],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    authService = TestBed.inject(AccountService);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Deve chamar o metodo Logar', () => {
    let spy = spyOn(component, 'logar').and.callThrough();

    component.logar();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('Deve logar', () => {
    const response = 'asdasdasdasdasdas';
    let loginSpy = spyOn(authService, 'login')
      .withArgs('', '')
      .and.returnValue(of(response));

    component.logar();
    localStorage.setItem('token', response);

    expect(loginSpy).toHaveBeenCalled();
    expect(window.localStorage.getItem('token')).toEqual(response);
    expect(router.navigate).toHaveBeenCalledWith(['']);
  });

  it('Logar deve retornar resultado negativo', () => {
    const errorResponse = new HttpErrorResponse({ status: 403, error: {} });
    spyOn(authService, 'login')
      .withArgs('', '')
      .and.returnValue(throwError(errorResponse));
    spyOn(window, 'alert');
    spyOn(console, 'error');

    component.logar();

    expect(authService.login).toThrowError();
    expect(window.alert).toHaveBeenCalledWith('Usuário ou senha inválido.');
    expect(console.error).toHaveBeenCalledWith(errorResponse);
  });
});
