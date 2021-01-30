import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageVocabularyCatComponent } from './manage-vocabulary-cat.component';

describe('ManageVocabularyCatComponent', () => {
  let component: ManageVocabularyCatComponent;
  let fixture: ComponentFixture<ManageVocabularyCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManageVocabularyCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageVocabularyCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
