import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGrammerCatComponent } from './manage-grammer-cat.component';

describe('ManageGrammerCatComponent', () => {
  let component: ManageGrammerCatComponent;
  let fixture: ComponentFixture<ManageGrammerCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageGrammerCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGrammerCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
