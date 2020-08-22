import { TestBed } from '@angular/core/testing';

import { DynamoLibService } from './dynamo-lib.service';

describe('DynamoLibService', () => {
  let service: DynamoLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DynamoLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
