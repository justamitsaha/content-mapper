import { TestBed } from '@angular/core/testing';

import { ContentFetchService } from './content-fetch.service';

describe('ContentFetchService', () => {
  let service: ContentFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContentFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
