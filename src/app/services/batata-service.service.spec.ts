import { TestBed } from '@angular/core/testing';

import { BatataServiceService } from './batata-service.service';

describe('BatataServiceService', () => {
  let service: BatataServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BatataServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
