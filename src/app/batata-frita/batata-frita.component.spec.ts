import { of } from 'rxjs';
import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TransfereService } from './../services/transfere-service.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatataFritaComponent } from './batata-frita.component';
import { BatataService } from '../services/batata-service.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Batatas } from '../interfaces/batatas.interface';

describe('BatataFritaComponent', () => {
  let component: BatataFritaComponent;
  let fixture: ComponentFixture<BatataFritaComponent>;
  let batataService: BatataService;

  let router = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatataFritaComponent],
      imports: [HttpClientModule],
      providers: [
        TransfereService,
        { provide: Router, useValue: router },
        BatataService,
      ],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(BatataFritaComponent);
    component = fixture.componentInstance;
    batataService = TestBed.inject(BatataService);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Deve navegar para detail', () => {
    component.navegaDetail('');

    expect(router.navigate).toHaveBeenCalledWith(['detail']);
  });

  it('Deve chamar batatas', () => {
    let spy = spyOn(component, 'getBatatas').and.callThrough();
    component.getBatatas();

    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('Deve setar data', () => {
    const response: Batatas[] = [
      {
        id: 1,
        nome: 'kk',
        qtd: 1,
        tipo: 'asd',
        total: 1,
        url: '12312',
        valor: 1,
      },
    ];
    spyOn(batataService, 'getBatatas2')
      .withArgs('batataFrita')
      .and.returnValue(of(response));

    component.getBatatas();

    expect(component.batatas).toEqual(response);
  });
});
