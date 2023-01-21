import { TestBed } from '@angular/core/testing';

import { GenpedService } from './genped.service';

describe('GenpedService', () => {
  let service: GenpedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GenpedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
