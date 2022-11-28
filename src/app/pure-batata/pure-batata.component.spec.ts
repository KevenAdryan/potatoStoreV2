import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PureBatataComponent } from './pure-batata.component';

describe('PureBatataComponent', () => {
  let component: PureBatataComponent;
  let fixture: ComponentFixture<PureBatataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PureBatataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PureBatataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
