import { TestBed } from '@angular/core/testing';

import { ReportventaService } from './reportventa.service';

describe('ReportventaService', () => {
  let service: ReportventaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportventaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
