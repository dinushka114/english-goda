import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { essayService } from './../../services/essay.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Essay } from 'src/app/modules/models/models';
import { ConfimationDialogComponent, ConfirmDialogModel } from '../../widgets/comfimation-dialog/confimation-dialog.component';


@Component({
  selector: 'app-essay-list',
  templateUrl: './essay-list.component.html',
  styleUrls: ['./essay-list.component.scss'],
})
export class EssayListComponent implements OnInit ,AfterViewInit{
  constructor(private essayService: essayService,private dialog:MatDialog) {}

  displayedColumns: string[] = ['title', 'created on', 'update', 'delete'];
  dataSource: any;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  essays: Essay[] = [];
  essaysSubs!: Subscription;

  addSearchText(newSearch: string) {
    this.dataSource.filter = newSearch.trim().toLowerCase();
  }

  result!:string;
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
        this.essayService.deleteEssay(id);
      }
    });
  }

  getEssaysList() {
    this.essayService.getEssays();
    this.essaysSubs = this.essayService
      .getEssaysUpdatListner()
      .subscribe((essays: Essay[]) => {
        this.dataSource = new MatTableDataSource(essays);
        this.dataSource.paginator = this.paginator;
      });
  }

  ngAfterViewInit(){}

  ngOnInit(): void {
    this.getEssaysList();
    console.log(this.dataSource);
  }
}
