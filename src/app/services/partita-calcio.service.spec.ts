import { TestBed } from '@angular/core/testing';

import { PartitaCalcioService } from './partita-calcio.service';

describe('PartitaCalcioService', () => {
  let service: PartitaCalcioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PartitaCalcioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
