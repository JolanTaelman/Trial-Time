import { TestBed } from '@angular/core/testing';

import { TrialServiceService } from './trial-service.service';

describe('TrialServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrialServiceService = TestBed.get(TrialServiceService);
    expect(service).toBeTruthy();
  });
});
