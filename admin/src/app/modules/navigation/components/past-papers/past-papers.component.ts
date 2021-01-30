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

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];

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

  displayedColumns: string[] = ['name', 'created on', 'update', 'delete'];
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
