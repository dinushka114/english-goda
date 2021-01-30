import { ConfimationDialogComponent } from './confimation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Injectable } from '@angular/core';

@Injectable()
export class ConfimationDialogService {
  constructor(private dialog: MatDialog) {}

  Isdelete:boolean=false;

  openDialog() {
   
  }
}
