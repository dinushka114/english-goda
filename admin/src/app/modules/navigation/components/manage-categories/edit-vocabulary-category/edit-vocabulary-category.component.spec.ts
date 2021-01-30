import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVocabularyCategoryComponent } from './edit-vocabulary-category.component';

describe('EditVocabularyCategoryComponent', () => {
  let component: EditVocabularyCategoryComponent;
  let fixture: ComponentFixture<EditVocabularyCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditVocabularyCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVocabularyCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
