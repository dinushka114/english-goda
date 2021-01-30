import { NgForm } from '@angular/forms';
import { CategoryService } from './../../../services/category.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-grammer-category',
  templateUrl: './edit-grammer-category.component.html',
  styleUrls: ['./edit-grammer-category.component.scss']
})
export class EditGrammerCategoryComponent implements OnInit {

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
    this.grammerCatService.updateGrammerCategory(this.catId , category)
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('catId')) {
        this.mode = 'edit';
        this.catId = paramMap.get('catId');
        console.log(this.catId)
        this.categoryData = this.grammerCatService.getGrammerCategory(this.catId);
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
