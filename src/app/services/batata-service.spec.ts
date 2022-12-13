import { of } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { BatataService } from './batata-service.service';

describe('BatataService', () => {
  let service: BatataService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(BatataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getBatatas should have been called', () => {
    let spyGet = spyOn(service, 'getBatatas').and.callThrough();
    service.getBatatas();
    expect(spyGet).toHaveBeenCalled();
  });

  it('getBatataid should have been called', () => {
    let spyGet = spyOn(service, 'getBatataId').and.callThrough();
    service.getBatataId(1);
    expect(spyGet).toHaveBeenCalledTimes(1);
  });

  it('getBatatas2 should have been called', () => {
    let spyGet = spyOn(service, 'getBatatas2').and.callThrough();
    service.getBatatas2('');
    expect(spyGet).toHaveBeenCalled();
  });
});
