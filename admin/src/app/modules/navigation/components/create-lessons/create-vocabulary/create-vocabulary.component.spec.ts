import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVocabularyComponent } from './create-vocabulary.component';

describe('CreateVocabularyComponent', () => {
  let component: CreateVocabularyComponent;
  let fixture: ComponentFixture<CreateVocabularyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateVocabularyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateVocabularyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
