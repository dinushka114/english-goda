import { ConfimationDialogService } from './../../widgets/comfimation-dialog/confimation-dialog.service';
import { CategoryService } from './../../services/category.service';
import { Category } from 'src/app/modules/models/category.model';
import { CreateGrammerCategoryComponent } from './../create-grammer-category/create-grammer-category.component';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { GrammerLessonService } from '../../services/grammer-lessons.service';

import { MatPaginator } from '@angular/material/paginator';
import { GrammerLesson } from 'src/app/modules/models/models';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {
  ConfimationDialogComponent,
  ConfirmDialogModel,
} from '../../widgets/comfimation-dialog/confimation-dialog.component';

@Component({
  selector: 'app-grammer-list',
  templateUrl: './grammer-list.component.html',
  styleUrls: ['./grammer-list.component.scss'],
})
export class GrammerListComponent implements OnInit, AfterViewInit {
  constructor(
    private grammerService: GrammerLessonService,
    public dialog: MatDialog,
    private categoryService: CategoryService,
    private confimationDialogService: ConfimationDialogService
  ) {}

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
      this.categoryService.createNewGrammerCategory(result);
    });
  }

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  private GrammerLessons: GrammerLesson[] = [];
  private GrammerLessonsSubs!: Subscription;

  displayedColumns: string[] = [
    'title',
    'category',
    'created on',
    'Is published',
    'update',
    'delete',
  ];
  dataSource: any;

  addSearchText(newSearch: string) {
    this.dataSource.filter = newSearch.trim().toLowerCase();
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
        this.grammerService.deleteGrammerLesson(id);
      }
    });
  }

  ngAfterViewInit() {}

  getGrammerLessons() {
    this.grammerService.getGrammerLessons();
    this.GrammerLessonsSubs = this.grammerService
      .getGrammerLessonUpdatListner()
      .subscribe((lessons: GrammerLesson[]) => {
        this.dataSource = new MatTableDataSource(lessons);
        this.dataSource.paginator = this.paginator;
        // this.GrammerLessons = lessons;
      });
  }

  ngOnInit(): void {
    this.getGrammerLessons();
  }
}
