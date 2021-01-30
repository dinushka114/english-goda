import { Category } from 'src/app/modules/models/category.model';
import { Subscription } from 'rxjs';
import { CategoryService } from './../../../services/category.service';
import { Component, OnInit, } from '@angular/core';

@Component({
  selector: 'app-manage-grammer-cat',
  templateUrl: './manage-grammer-cat.component.html',
  styleUrls: ['./manage-grammer-cat.component.scss'],
})
export class ManageGrammerCatComponent implements OnInit {
  constructor(private categoryService: CategoryService) {}

  grammerCats: Category[] = [];
  grammerCatSubs!: Subscription;

  displayedColumns: string[] = ['name', 'description', 'update', 'delete'];
  // dataSource = this.grammerCats;

  deleteCategory(id:string){
    this.categoryService.deleteGrammerCategory(id);
  }

  getGrammerCats() {
    this.categoryService.getGrammerCategories();
    this.grammerCatSubs = this.categoryService
      .getGrammerCategoryUpdatedListner()
      .subscribe((cats: Category[]) => {
        this.grammerCats = cats;
        console.log(this.grammerCats);
      });
  }

  ngOnInit() {
    this.getGrammerCats();
  }
}
