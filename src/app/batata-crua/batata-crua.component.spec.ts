import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatataCruaComponent } from './batata-crua.component';

describe('BatataCruaComponent', () => {
  let component: BatataCruaComponent;
  let fixture: ComponentFixture<BatataCruaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatataCruaComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(BatataCruaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
