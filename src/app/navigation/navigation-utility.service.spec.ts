import { TestBed, inject } from '@angular/core/testing';

import { NavigationUtilityService } from './navigation-utility.service';

describe('NavigationUtilityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NavigationUtilityService]
    });
  });

  it('should be created', inject([NavigationUtilityService], (service: NavigationUtilityService) => {
    expect(service).toBeTruthy();
  }));
});
