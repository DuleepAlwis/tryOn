import { TestBed } from '@angular/core/testing';

import { SearchProductService } from './search-product.service';

describe('SearchProductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchProductService = TestBed.get(SearchProductService);
    expect(service).toBeTruthy();
  });
});
