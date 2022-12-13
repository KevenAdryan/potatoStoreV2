import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatatasComponent } from './batatas.component';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

describe('BatatasComponent', () => {
  let component: BatatasComponent;
  let fixture: ComponentFixture<BatatasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatatasComponent],
      imports: [HttpClientModule],
      schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(BatatasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
