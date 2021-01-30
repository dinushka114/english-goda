import { EditVocabularyCategoryComponent } from './components/manage-categories/edit-vocabulary-category/edit-vocabulary-category.component';
import { EditGrammerCategoryComponent } from './components/manage-categories/edit-grammer-category/edit-grammer-category.component';
import { CreatePaperComponent } from './components/create-lessons/create-paper/create-paper.component';
// ?import { CreateVocabularyComponent } from './vocabulary-list/create-vocabulary/create-vocabulary.component';
import { ManageCategoriesComponent } from './components/manage-categories/manage-categories.component';
import { CreateLessonComponent } from './components/create-lessons/create-lesson/create-lesson.component';
import { PastPapersComponent } from './components/past-papers/past-papers.component';
import { EssayListComponent } from './components/essay-list/essay-list.component';
import { VocabularyListComponent } from './components/vocabulary-list/vocabulary-list.component';
import { GrammerListComponent } from './components/grammer-list/grammer-list.component';
import { NavComponent } from './components/nav/nav.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateVocabularyComponent } from './components/create-lessons/create-vocabulary/create-vocabulary.component';
import { CreateEssayComponent } from './components/create-lessons/create-essay/create-essay.component';

const routes: Routes = [
  {
    path:'',
    component:NavComponent,
    children:[
      {
        path:'grammer-list/edit/:lessonId',
        component:CreateLessonComponent,
      },
      {
        path:'grammer-list/new',
        component:CreateLessonComponent,
      },
      {
        path:'vocabulary-list/new',
        component:CreateVocabularyComponent,
      },
      {
        path:'vocabulary-list/edit/:vocId',
        component:CreateVocabularyComponent,
      },
      {
        path:'essay-list/new',
        component:CreateEssayComponent,
      },
      {
        path:'essay-list/edit/:essayId',
        component:CreateEssayComponent,
      },
      {
        path:'past-papers/new',
        component:CreatePaperComponent,
      },
      {
        path:'past-papers/edit/:paperId',
        component:CreatePaperComponent,
      },
      {
        path:'grammer-list',
        component:GrammerListComponent
      },
      {
        path:'vocabulary-list',
        component:VocabularyListComponent
      },
      {
        path:'essay-list',
        component:EssayListComponent
      },
      {
        path:'past-papers',
        component:PastPapersComponent
      },
      {
        path:'categories',
        component:ManageCategoriesComponent
      },
      {
        path:'categories/edit/:catId',
        component:EditGrammerCategoryComponent
      },
      {
        path:'categories/edit-voc/:catId',
        component:EditVocabularyCategoryComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavigationRoutingModule { }
