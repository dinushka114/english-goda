import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Category } from 'src/app/modules/models/category.model';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-manage-vocabulary-cat',
  templateUrl: './manage-vocabulary-cat.component.html',
  styleUrls: ['./manage-vocabulary-cat.component.scss']
})
export class ManageVocabularyCatComponent implements OnInit {

  constructor(private categoryService: CategoryService) {}

  vocCats: Category[] = [];
  vocCatSubs!: Subscription;

  displayedColumns: string[] = ['name', 'description', 'update', 'delete'];
  // dataSource = this.grammerCats;

  deleteCategory(id:string){
    this.categoryService.deleteVOcabularyCategory(id);
  }

  getVocCats() {
    this.categoryService.getVocabularyCategories();
    this.vocCatSubs = this.categoryService
      .getVOcabularyCategoryUpdatedListner()
      .subscribe((cats: Category[]) => {
        this.vocCats = cats;
        // console.log(this.grammerCats);
      });
  }

  ngOnInit() {
    this.getVocCats();
  }

}
