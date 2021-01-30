import { essayService } from './../../../services/essay.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-essay',
  templateUrl: './create-essay.component.html',
  styleUrls: ['./create-essay.component.scss']
})
export class CreateEssayComponent implements OnInit {

  constructor(private route:ActivatedRoute,private essayService:essayService) { }

  lessonTitle!: string;
  lessonContent!: string;

  mode!:string;
  essayId:any="";

  essay:any;

  addEssay(form:NgForm){
    if(form.invalid){
      return
    }
    const essay = {
      title:form.value.title,
      content:form.value.content
    }

    if(this.mode=="new"){
      this.essayService.createEssay(essay);
    }
    else if(this.mode=="edit"){
      this.essayService.updateEssay(this.essayId,essay);
    }
  }


  ngOnInit(): void {

    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('essayId')) {
        this.mode = 'edit';
        this.essayId = paramMap.get('essayId');
        this.essay = this.essayService.getEssay(this.essayId);
        this.lessonTitle = this.essay.title;
        this.lessonContent = this.essay.content;
      }
      else{
        this.mode = "new";
        this.essayId = null;
      }
    });


  }

}
