import { PastPaperService } from './services/past-paper.service';
import { essayService } from './services/essay.service';
// port { ManageGrammerCatComponent } from './components/manage-categories/manage-grammer-cat/manage.grammer.component';
import { ConfimationDialogService } from './widgets/comfimation-dialog/confimation-dialog.service';
import { ConfimationDialogComponent } from './widgets/comfimation-dialog/confimation-dialog.component';
import { CreateGrammerCategoryComponent } from './components/create-grammer-category/create-grammer-category.component';
import { SnakbarService } from './widgets-services/snakbar.service';
import { CategoryService } from './services/category.service';
import { GrammerLessonService } from './services/grammer-lessons.service';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationRoutingModule } from './navigation-routing.module';
import { NavComponent } from './components/nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

import { GrammerListComponent } from './components/grammer-list/grammer-list.component';
import { VocabularyListComponent } from './components/vocabulary-list/vocabulary-list.component';
import { EssayListComponent } from './components/essay-list/essay-list.component';
import { PastPapersComponent } from './components/past-papers/past-papers.component';
import { SearchComponent } from './components/search/search.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CreateLessonComponent } from './components/create-lessons/create-lesson/create-lesson.component';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { CKEditorModule } from 'ng2-ckeditor';
import { ManageCategoriesComponent } from './components/manage-categories/manage-categories.component';
import { VocabularyLessonService } from './services/vocabulary-lessons.service';
import { CreateVocabularyComponent } from './components/create-lessons/create-vocabulary/create-vocabulary.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CreateEssayComponent } from './components/create-lessons/create-essay/create-essay.component';
import { CreatePaperComponent } from './components/create-lessons/create-paper/create-paper.component';
import { ManageGrammerCatComponent } from './components/manage-categories/manage-grammer-cat/manage-grammer-cat.component';
import { ManageVocabularyCatComponent } from './components/manage-categories/manage-vocabulary-cat/manage-vocabulary-cat.component';
import { EditGrammerCategoryComponent } from './components/manage-categories/edit-grammer-category/edit-grammer-category.component';
import { EditVocabularyCategoryComponent } from './components/manage-categories/edit-vocabulary-category/edit-vocabulary-category.component';
import { AuthInterceptor } from '../auth/auth.interceptor';
// import { CreateVocabularyComponent } from './vocabulary-list/create-vocabulary/create-vocabulary.component';

@NgModule({
  declarations: [
    NavComponent,
    GrammerListComponent,
    VocabularyListComponent,
    EssayListComponent,
    PastPapersComponent,
    SearchComponent,
    CreateLessonComponent,
    CreateGrammerCategoryComponent,
    ConfimationDialogComponent,
    ManageCategoriesComponent,
    CreateVocabularyComponent,
    CreateEssayComponent,
    CreatePaperComponent,
    ManageGrammerCatComponent,
    ManageVocabularyCatComponent,
    EditGrammerCategoryComponent,
    EditVocabularyCategoryComponent,
  ],
  imports: [
    CommonModule,
    NavigationRoutingModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatOptionModule,
    MatSelectModule,
    CKEditorModule,
    MatSnackBarModule,
    MatDialogModule,
    MatTabsModule,
    MatTooltipModule,
    MatRadioModule,
    MatCheckboxModule
  ],
  providers: [
    GrammerLessonService,
    CategoryService,
    SnakbarService,
    ConfimationDialogService,
    VocabularyLessonService,
    essayService,
    PastPaperService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}
  ],
  
})
export class NavigationModule {}
