import {TestBed} from '@angular/core/testing';

import {TableStorageService} from './table-storage.service';

describe('TableStorageService', () => {
  let service: TableStorageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableStorageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
