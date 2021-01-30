import { GrammerLessonService } from '../../../services/grammer-lessons.service';
import { GrammerLesson } from 'src/app/modules/models/models';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/modules/models/category.model';
import { CategoryService } from '../../../services/category.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-create-lesson',
  templateUrl: './create-lesson.component.html',
  styleUrls: ['./create-lesson.component.scss'],
})
export class CreateLessonComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private grammerService: GrammerLessonService
  ) {}

  GrammerCategories: Category[] = [];
  private GrammerCategorisSub!: Subscription;

  value!: string;

  lessonTitle!: string;
  lessonContent!: string;
  category!: string;

  mode!: string;
  lessonId: any;

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

  getGrammerCategories() {
    this.categoryService.getGrammerCategories();
    this.GrammerCategorisSub = this.categoryService
      .getGrammerCategoryUpdatedListner()
      .subscribe((categories: Category[]) => {
        this.GrammerCategories = categories;
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
      this.grammerService.createNewGrammerLesson(lesson);
    }else if(this.mode=="edit"){
      this.grammerService.updateGrammerLesson(this.lessonId,lesson);
    }

  }

  ngOnInit(): void {
    this.getGrammerCategories();

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('lessonId')) {
        this.mode = 'edit';
        this.lessonId = paramMap.get('lessonId');
        this.lesson = this.grammerService.getGrammerLesson(this.lessonId);
        this.lessonTitle = this.lesson.title;
        this.lessonContent = this.lesson.content;
      }
      else{
        this.mode = "new";
        this.lessonId = null;
      }
    });
  }
}
