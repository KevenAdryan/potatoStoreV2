import { Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TransfereService } from './../services/transfere-service.service';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BatataCruaComponent } from './batata-crua.component';
import { BatataService } from '../services/batata-service.service';

describe('BatataCruaComponent', () => {
  let component: BatataCruaComponent;
  let fixture: ComponentFixture<BatataCruaComponent>;

  let router = { navigate: jasmine.createSpy('navigate') };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BatataCruaComponent],
      imports: [HttpClientModule],
      providers: [
        TransfereService,
        { provide: Router, useValue: router },
        BatataService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BatataCruaComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should call getBatatas', async () => {
    const debugElement = fixture.debugElement;
    let batataService = debugElement.injector.get(BatataService);

    let spy = spyOn(batataService, 'getBatatas2').and.callThrough();
    fixture.detectChanges();
    component.batatas = ['bbb'];
    expect(spy).toHaveBeenCalled();
    expect(component.batatas.length).toBeGreaterThan(0);
  });

  it('should set data and navigate when called', () => {
    component.navegaDetail('');
    let service = spyOn(component.transfereService, 'setData');
    service.withArgs(1).and.callFake((ob) => {
      expect(ob).toHaveBeenCalled();
    });

    expect(router.navigate).toHaveBeenCalledWith(['detail']);
  });
});
