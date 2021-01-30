import { Category } from 'src/app/modules/models/category.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-grammer-category',
  templateUrl: './create-grammer-category.component.html',
  styleUrls: ['./create-grammer-category.component.scss']
})
export class CreateGrammerCategoryComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<CreateGrammerCategoryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Category) {}

  ngOnInit(): void {
  }

  onNoClick(): void {
    // console.log(this.data.description);
    this.dialogRef.close();
  }

}
