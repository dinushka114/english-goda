import { VocabularyLessonService } from './../../../services/vocabulary-lessons.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Category } from './../../../../models/category.model';
import { Subscription } from 'rxjs';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-vocabulary',
  templateUrl: './create-vocabulary.component.html',
  styleUrls: ['./create-vocabulary.component.scss']
})
export class CreateVocabularyComponent implements OnInit {

  constructor(private categoryService:CategoryService,private route:ActivatedRoute,private vocabularyService:VocabularyLessonService) { }

  vocabularyCategorySubs!:Subscription;
  vocabularyCategories:Category[] = [];

  lessonTitle!: string;
  lessonContent!: string;
  category!: string;

  mode!: string;
  vocId: any;

  lesson: any;
  Isdraft=false;

  checkCheckBoxvalue(value:any){
    this.Isdraft = value.checked;
    // console.log(value.checked)
    // console.log(this.Isdraft)

  }

  selectChangeHandler(value: any) {
    this.category = value;
  }

  getVocabularyCategories() {
    this.categoryService.getVocabularyCategories();
    this.vocabularyCategorySubs = this.categoryService
      .getVOcabularyCategoryUpdatedListner()
      .subscribe((categories: Category[]) => {
        this.vocabularyCategories = categories;
      });
  }

  addLesson(form: NgForm) {
    if(form.invalid){
      return
    }
    const lesson = {
      title:form.value.title,
      content:form.value.content,
      category:this.category,
      Isdraft:this.Isdraft
    }

    if(this.mode=="new"){
      this.vocabularyService.createNewVocabularyLesson(lesson);
    }else if(this.mode=="edit"){
      this.vocabularyService.updateVocabularyLesson(this.vocId,lesson);
    }

  }

  ngOnInit(): void {
    this.getVocabularyCategories()


    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('vocId')) {
        this.mode = 'edit';
        this.vocId = paramMap.get('vocId');
        this.lesson = this.vocabularyService.getVocabularyLesson(this.vocId);
        this.lessonTitle = this.lesson.title;
        this.lessonContent = this.lesson.content;
      }
      else{
        this.mode = "new";
        this.vocId = null;
      }
    });
  }

}
