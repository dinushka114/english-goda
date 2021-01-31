import { PastPaperService } from './../../../services/past-paper.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-paper',
  templateUrl: './create-paper.component.html',
  styleUrls: ['./create-paper.component.scss'],
})
export class CreatePaperComponent implements OnInit {
  constructor(
    private router: ActivatedRoute,
    private paperService: PastPaperService
  ) {}

  paperName!: string;
  pastPaper!: string;
  paperAnswers!: string;

  mode!: string;
  paperId: any;
  paper: any;

  Isdraft=false;

  checkCheckBoxvalue(value:any){
    this.Isdraft = value.checked;
    // console.log(value.checked)
    // console.log(this.Isdraft)

  }

  addPaper(form: NgForm) {
    if (form.invalid) {
      return;
    }

    // console.log(form.value.name , form.value.past_paper,form.value.answers )

    const paper = {
      name: form.value.name,
      past_paper: form.value.past_paper,
      answers: form.value.answers,
      Isdraft:this.Isdraft
    };
    if (this.mode == 'new') {
      this.paperService.createPaper(paper);
    } else if (this.mode == 'edit') {
      this.paperService.updatePaper(this.paperId, paper);
    }
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has('paperId')) {
        this.mode = 'edit';
        this.paperId = paramMap.get('paperId');
        this.paper = this.paperService.getPaper(this.paperId);
        console.log(this.paper);
        this.paperName = this.paper.name;
        this.paperAnswers = this.paper.answers;
        this.pastPaper = this.paper.paper;
        // console.log(this.pastPaper);
      } else {
        this.mode = 'new';
        this.paperId = null;
      }
    });
  }
}
