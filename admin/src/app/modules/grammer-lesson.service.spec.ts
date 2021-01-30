import { TestBed } from '@angular/core/testing';

import { GrammerLessonService } from './grammer-lesson.service';

describe('GrammerLessonService', () => {
  let service: GrammerLessonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GrammerLessonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
