import { TestBed } from '@angular/core/testing';

import { DemoservService } from './demoserv.service';

describe('DemoservService', () => {
  let service: DemoservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemoservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
