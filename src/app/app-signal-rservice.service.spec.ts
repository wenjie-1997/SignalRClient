import { TestBed } from '@angular/core/testing';

import { AppSignalRService } from './app-signal-rservice.service';

describe('AppSignalRServiceService', () => {
  let service: AppSignalRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppSignalRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
