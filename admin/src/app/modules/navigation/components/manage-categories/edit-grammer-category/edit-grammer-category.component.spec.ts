import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditGrammerCategoryComponent } from './edit-grammer-category.component';

describe('EditGrammerCategoryComponent', () => {
  let component: EditGrammerCategoryComponent;
  let fixture: ComponentFixture<EditGrammerCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditGrammerCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditGrammerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
