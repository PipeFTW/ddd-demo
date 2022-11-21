import { TestBed } from '@angular/core/testing';

import { TablePersistenceService } from './table-persistence.service';

describe('TablePersistenceService', () => {
  let service: TablePersistenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TablePersistenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
