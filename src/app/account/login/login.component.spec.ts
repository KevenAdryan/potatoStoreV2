import { AccountService } from './../shared/account.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [HttpClientModule, FormsModule],
      providers: [AccountService],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('logar should call auth login method', async () => {
    let loginElement: DebugElement;
    const debugElement = fixture.debugElement;
    let authService = debugElement.injector.get(AccountService);

    let loginSpy = spyOn(authService, 'login').and.callThrough();
    loginElement = fixture.debugElement.query(By.css('form'));
    loginElement.triggerEventHandler('ngSubmit', null);
    fixture.detectChanges();
    expect(loginSpy).toHaveBeenCalledTimes(1);
  });

  it('logar Should return true login when called', () => {
    const debugElement = fixture.debugElement;
    let authService = debugElement.injector.get(AccountService);
    let loginSpy = spyOn(authService, 'login').and.returnValue(of(true));
    component.logar();
    expect(loginSpy).toHaveBeenCalled();
  });

  it('logar Should return a error when called', () => {
    const debugElement = fixture.debugElement;
    let authService = debugElement.injector.get(AccountService);
    let loginSpy = spyOn(authService, 'login').and.returnValue(of(false));
    component.logar();
    expect(loginSpy).toHaveBeenCalled();
  });
});

export interface tokensssss {
  accestToken: string;
}
