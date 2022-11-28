import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatataFritaComponent } from './batata-frita.component';

describe('BatataFritaComponent', () => {
  let component: BatataFritaComponent;
  let fixture: ComponentFixture<BatataFritaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatataFritaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatataFritaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
