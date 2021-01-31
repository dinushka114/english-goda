import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { Paper } from './../../../models/models';
import { PastPaperService } from './../../services/past-paper.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import {
  ConfimationDialogComponent,
  ConfirmDialogModel,
} from '../../widgets/comfimation-dialog/confimation-dialog.component';



@Component({
  selector: 'app-past-papers',
  templateUrl: './past-papers.component.html',
  styleUrls: ['./past-papers.component.scss'],
})
export class PastPapersComponent implements OnInit {
  constructor(
    private paperService: PastPaperService,
    private dialog: MatDialog
  ) {}

  displayedColumns: string[] = ['name', 'created on','Is published', 'update', 'delete'];
  dataSource: any;

  papersSubs!: Subscription;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  addSearchText(newSearch: string) {
    this.dataSource.filter = newSearch.trim().toLowerCase();
  }

  // ngAfterViewInit(){
  //   this.dataSource.paginator = this.paginator;
  // }

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
        this.paperService.deletePaper(id);
      }
    });
  }

  getPastPapers() {
    this.paperService.getPapers();
    this.paperService.getPaperUpdateLisnter().subscribe((papers: Paper[]) => {
      this.dataSource = new MatTableDataSource(papers);
      this.dataSource.paginator = this.paginator;
    });
  }

  ngOnInit(): void {
    this.getPastPapers();
  }
}
