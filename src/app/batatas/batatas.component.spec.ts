import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatatasComponent } from './batatas.component';

describe('BatatasComponent', () => {
  let component: BatatasComponent;
  let fixture: ComponentFixture<BatatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BatatasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BatatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
