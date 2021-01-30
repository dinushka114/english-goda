import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateGrammerCategoryComponent } from './create-grammer-category.component';

describe('CreateGrammerCategoryComponent', () => {
  let component: CreateGrammerCategoryComponent;
  let fixture: ComponentFixture<CreateGrammerCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateGrammerCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateGrammerCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
