import { TestBed, inject } from '@angular/core/testing';

import { MoedaService } from './moeda.service';

describe('OedaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MoedaService]
    });
  });

  it('should be created', inject([MoedaService], (service: MoedaService) => {
    expect(service).toBeTruthy();
  }));
});
