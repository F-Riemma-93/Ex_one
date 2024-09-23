import { TestBed } from '@angular/core/testing';

import { UserLoginAPIService } from './user-login-api.service';

describe('UserLoginAPIService', () => {
  let service: UserLoginAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserLoginAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
