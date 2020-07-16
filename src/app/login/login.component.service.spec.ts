import { TestBed } from '@angular/core/testing';

import { Login.ComponentService } from './login.component.service';

describe('Login.ComponentService', () => {
  let service: Login.ComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Login.ComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
