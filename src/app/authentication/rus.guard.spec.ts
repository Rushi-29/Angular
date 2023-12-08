import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { rusGuard } from './rus.guard';

describe('rusGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => rusGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
