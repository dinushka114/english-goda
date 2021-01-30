import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrammerListComponent } from './grammer-list.component';

describe('GrammerListComponent', () => {
  let component: GrammerListComponent;
  let fixture: ComponentFixture<GrammerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrammerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrammerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
