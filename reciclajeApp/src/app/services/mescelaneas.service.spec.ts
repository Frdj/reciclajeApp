import { TestBed } from '@angular/core/testing';

import { MescelaneasService } from './mescelaneas.service';

describe('MescelaneasService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MescelaneasService = TestBed.get(MescelaneasService);
    expect(service).toBeTruthy();
  });
});
