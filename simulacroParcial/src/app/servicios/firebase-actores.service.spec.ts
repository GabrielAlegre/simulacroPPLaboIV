import { TestBed } from '@angular/core/testing';

import { FirebaseActoresService } from './firebase-actores.service';

describe('FirebaseActoresService', () => {
  let service: FirebaseActoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirebaseActoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
