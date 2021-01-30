import { Router } from '@angular/router';
import { SnakbarService } from './../widgets-services/snakbar.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Category } from '../../models/category.model';

@Injectable()
export class CategoryService {
  constructor(
    private http: HttpClient,
    private snakbarService: SnakbarService,
    private router: Router
  ) {}
  // private grammerCategoryUrl = 'http://localhost:3000/api/admin/category';
  // private vocabularyCategoryUrl =
  //   'http://localhost:3000/api/admin/vocabulary-category';

  private grammerCategoryUrl =
    'https://still-reef-77817.herokuapp.com/api/admin/category';
  private vocabularyCategoryUrl =
    'https://still-reef-77817.herokuapp.com/api/admin/vocabulary-category';

  grammerCategories: Category[] = [];
  grammerCategoriesUpdated = new Subject<Category[]>();

  vocabularyCategories: Category[] = [];
  vocabularyCategoryUpdated = new Subject<Category[]>();

  getGrammerCategories() {
    this.http.get<Category[]>(this.grammerCategoryUrl).subscribe((res) => {
      this.grammerCategories = res;
      this.grammerCategoriesUpdated.next([...this.grammerCategories]);
      return this.grammerCategories;
    });
  }

  getGrammerCategoryUpdatedListner() {
    return this.grammerCategoriesUpdated.asObservable();
  }

  createNewGrammerCategory(categoryData: Category) {
    this.http.post(this.grammerCategoryUrl + '/new', categoryData).subscribe(
      (res) => {
        //
        if (res !== null) {
          this.snakbarService.openSnakbar('Category created!!', 'Category');
        }
      },
      (err) => {
        if (err instanceof HttpErrorResponse) {
          this.snakbarService.openSnakbar(err.name, 'Category failed');
        }
      }
    );
  }

  getGrammerCategory(id: string) {
    return {
      ...this.grammerCategories.find((category) => category._id === id),
    };
  }

  updateGrammerCategory(id: string, category: any) {
    if (category.name !== null || category.name !== undefined) {
      const updatedCat = {
        name: category.name,
        description: category.description,
      };
      this.http
        .put(this.grammerCategoryUrl + '/update/' + id, updatedCat)
        .subscribe((res) => {
          this.snakbarService.openSnakbar(
            'Category Updated Sucessfully!!',
            'Updated'
          );
          this.router.navigate(['/dashboard/categories']);
        });
    }
  }

  deleteGrammerCategory(id: string) {
    this.http
      .delete(this.grammerCategoryUrl + '/delete/' + id)
      .subscribe((res) => {
        const updatedGrammerCategories = this.grammerCategories.filter(
          (category) => category._id !== id
        );
        this.grammerCategories = updatedGrammerCategories;
        this.grammerCategoriesUpdated.next([...this.grammerCategories]);
        this.snakbarService.openSnakbar(
          'Category deleted Sucessfully!!',
          'Deleted'
        );
      });
  }

  getVocabularyCategories() {
    this.http.get<Category[]>(this.vocabularyCategoryUrl).subscribe((res) => {
      this.vocabularyCategories = res;
      this.vocabularyCategoryUpdated.next([...this.vocabularyCategories]);
      console.log(this.vocabularyCategories);
      return this.vocabularyCategories;
    });
  }

  getVOcabularyCategoryUpdatedListner() {
    return this.vocabularyCategoryUpdated.asObservable();
  }

  getVocabularyCategory(id: string) {
    return {
      ...this.vocabularyCategories.find((category) => category._id === id),
    };
  }

  createNewVocabularyCategory(categoryData: Category) {
    if (categoryData.name !== null || categoryData.name !== undefined) {
      this.http
        .post(this.vocabularyCategoryUrl + '/new', categoryData)
        .subscribe(
          (res) => {
            //
            if (res !== null) {
              this.snakbarService.openSnakbar('Category created!!', 'Category');
            }
          },
          (err) => {
            if (err instanceof HttpErrorResponse) {
              this.snakbarService.openSnakbar(err.name, 'Category failed');
            }
          }
        );
    }
  }

  updateVocabularyCategory(id: string, category: any) {
    if (category.name !== null || category.name !== undefined) {
      const updatedCat = {
        name: category.name,
        description: category.description,
      };
      this.http
        .put(this.vocabularyCategoryUrl + '/update/' + id, updatedCat)
        .subscribe((res) => {
          this.snakbarService.openSnakbar(
            'Category Updated Sucessfully!!',
            'Updated'
          );
          this.router.navigate(['/dashboard/categories']);
        });
    }
  }

  deleteVOcabularyCategory(id: string) {
    this.http
      .delete(this.vocabularyCategoryUrl + '/delete/' + id)
      .subscribe((res) => {
        const updatedVocabularyCategories = this.vocabularyCategories.filter(
          (category) => category._id !== id
        );
        this.vocabularyCategories = updatedVocabularyCategories;
        this.vocabularyCategoryUpdated.next([...this.vocabularyCategories]);
        this.snakbarService.openSnakbar(
          'Category deleted Sucessfully!!',
          'Deleted'
        );
      });
  }
}
