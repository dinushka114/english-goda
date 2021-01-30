import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastPapersComponent } from './past-papers.component';

describe('PastPapersComponent', () => {
  let component: PastPapersComponent;
  let fixture: ComponentFixture<PastPapersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastPapersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastPapersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
