import { TestBed } from '@angular/core/testing';

import { PorductStaticService } from './porduct-static.service';

describe('PorductStaticService', () => {
  let service: PorductStaticService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PorductStaticService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
