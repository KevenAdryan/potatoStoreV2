import { of } from 'rxjs';
import { TransfereService } from './../services/transfere-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailComponent } from './detail.component';
import { Batatas } from '../interfaces/batatas.interface';
import { BatataService } from '../services/batata-service.service';

describe('DetailComponent', () => {
  let component: DetailComponent;
  let fixture: ComponentFixture<DetailComponent>;
  let transfereService: TransfereService;
  let batataService: BatataService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DetailComponent],
      imports: [HttpClientModule],
      providers: [TransfereService, BatataService],
    }).compileComponents();

    fixture = TestBed.createComponent(DetailComponent);
    component = fixture.componentInstance;
    transfereService = TestBed.inject(TransfereService);
    batataService = TestBed.inject(BatataService);
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('Deve retornar id negativo', () => {
    fixture.detectChanges();

    expect(component.id).toEqual(-1);
  });

  it('Deve retornar id positivo', () => {
    const num: number = 1;
    transfereService.data = num;
    component.ngOnInit();
    expect(component.id).toEqual(num);
  });

  it('Deve atribuir batata ID', () => {
    const response: Batatas = {
      id: 1,
      nome: 'kk',
      qtd: 1,
      tipo: 'asd',
      total: 1,
      url: '12312',
      valor: 1,
    };

    let spy = spyOn(batataService, 'getBatataId').and.returnValues(
      of(response)
    );

    component.getBatata();
    expect(spy).toHaveBeenCalled();
    expect(component.img).toEqual(response.url);
    expect(component.valor).toEqual(response.valor);
    expect(component.nome).toEqual(response.nome);
  });
});
