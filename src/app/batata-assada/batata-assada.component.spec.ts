import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatataAssadaComponent } from './batata-assada.component';

describe('BatataAssadaComponent', () => {
  let component: BatataAssadaComponent;
  let fixture: ComponentFixture<BatataAssadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatataAssadaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatataAssadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
