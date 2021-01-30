import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-edit-vocabulary-category',
  templateUrl: './edit-vocabulary-category.component.html',
  styleUrls: ['./edit-vocabulary-category.component.scss']
})
export class EditVocabularyCategoryComponent implements OnInit {

  constructor(private route:ActivatedRoute,private grammerCatService:CategoryService) { }

  mode!:string;
  catId:any;
  categoryData:any;
  catName:any;
  catDes:any;

  editGrammerCat(form:NgForm){
    // console.log(form.value.categoryName , form.value.categoryDescription)
    if(form.invalid){
      return
    }
    const category ={
      name:form.value.categoryName,
      description:form.value.categoryDescription
    }
    this.grammerCatService.updateVocabularyCategory(this.catId , category)
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('catId')) {
        this.mode = 'edit-voc';
        this.catId = paramMap.get('catId');
        console.log(this.catId)
        this.categoryData = this.grammerCatService.getVocabularyCategory(this.catId);
        this.catName= this.categoryData.name;
        this.catDes = this.categoryData.description
        // this.lessonContent = this.essay.content;
      }
      else{
        this.mode = "new";
        this.catId = null;
      }
    });

  }

}
