import { TestBed } from '@angular/core/testing';

import { GraphQLUserDataService } from './graphql-user-data.service';

describe('UserDataService', () => {
  let service: GraphQLUserDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GraphQLUserDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
