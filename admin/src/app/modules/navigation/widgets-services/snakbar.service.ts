import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';

@Injectable()
export class SnakbarService {
  constructor(private snakBar: MatSnackBar) {}

  openSnakbar(message:string , action:string){
    this.snakBar.open(message,action,{
        duration:2000
    })
  }
}
