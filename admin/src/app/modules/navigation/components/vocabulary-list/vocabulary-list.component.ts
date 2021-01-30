import { CategoryService } from './../../services/category.service';
import { MatDialog } from '@angular/material/dialog';
import { VocabularyLesson } from './../../../models/models';
import { Subscription } from 'rxjs';
import { VocabularyLessonService } from './../../services/vocabulary-lessons.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {
  ConfimationDialogComponent,
  ConfirmDialogModel,
} from '../../widgets/comfimation-dialog/confimation-dialog.component';
import { Category } from 'src/app/modules/models/category.model';
import { CreateGrammerCategoryComponent } from '../create-grammer-category/create-grammer-category.component';



@Component({
  selector: 'app-vocabulary-list',
  templateUrl: './vocabulary-list.component.html',
  styleUrls: ['./vocabulary-list.component.scss'],
})
export class VocabularyListComponent implements OnInit {
  constructor(
    private vocabularyService: VocabularyLessonService,
    private dialog: MatDialog,
    private categoryService: CategoryService
  ) {}

  displayedColumns: string[] = [
    'title',
    'category',
    'created on',
    'Is published',
    'update',
    'delete',
  ];
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  vocabulryLessonsSubs!: Subscription;

  updatedCategory: Category = {
    _id: '',
    name: '',
    description: '',
  };

  openDialog(): void {
    const dialogRef = this.dialog.open(CreateGrammerCategoryComponent, {
      width: '500px',
      data: {
        name: this.updatedCategory.name,
        description: this.updatedCategory.description,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      // console.log('The dialog was closed');
      this.categoryService.createNewVocabularyCategory(result);
    });
  }

  result: string = '';
  confirmDialog(id: string): void {
    const message = `Are you sure you want to do this?`;
    const action = 'Confirm action';
    const dialogData = new ConfirmDialogModel(action, message);

    const dialogRef = this.dialog.open(ConfimationDialogComponent, {
      maxWidth: '400px',
      data: dialogData,
    });

    dialogRef.afterClosed().subscribe((dialogResult) => {
      this.result = dialogResult;
      if (dialogResult == true) {
        this.vocabularyService.deleteVocabularyLesson(id);
      }
    });
  }

  getVocabularyLessons() {
    this.vocabularyService.getVocabularyLessons();
    this.vocabulryLessonsSubs = this.vocabularyService
      .getVocabularyLessonUpdateListner()
      .subscribe((lessons: VocabularyLesson[]) => {
        this.dataSource = new MatTableDataSource(lessons);
        this.dataSource.paginator = this.paginator;
        // this.GrammerLessons = lessons;
      });
  }

  addSearchText(newSearch: string) {
    this.dataSource.filter = newSearch.trim().toLowerCase();
  }

  // ngAfterViewInit(){
  //   this.dataSource.paginator = this.paginator;
  // }

  ngOnInit(): void {
    this.getVocabularyLessons();
  }
}
