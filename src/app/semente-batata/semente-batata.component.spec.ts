import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SementeBatataComponent } from './semente-batata.component';

describe('SementeBatataComponent', () => {
  let component: SementeBatataComponent;
  let fixture: ComponentFixture<SementeBatataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SementeBatataComponent],
      imports: [HttpClientModule],
    }).compileComponents();

    fixture = TestBed.createComponent(SementeBatataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
