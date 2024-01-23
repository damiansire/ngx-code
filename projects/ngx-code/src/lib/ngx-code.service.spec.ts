import { TestBed } from '@angular/core/testing';

import { NgCodeService } from './ngx-code.service';

describe('NgCodeService', () => {
  let service: NgCodeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgCodeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
