import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { TransfereService } from './../services/transfere-service.service';
import { BatataService } from './../services/batata-service.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatataAssadaComponent } from './batata-assada.component';

describe('BatataAssadaComponent', () => {
  let component: BatataAssadaComponent;
  let fixture: ComponentFixture<BatataAssadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatataAssadaComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BatataAssadaComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
