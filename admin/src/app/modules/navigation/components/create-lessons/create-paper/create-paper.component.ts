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
  paperLink!: string;
  paperAnswers!: string;

  mode!: string;
  paperId: any;
  paper: any;

  addPaper(form: NgForm) {
    if (form.invalid) {
      return;
    }

    const paper = {
      name: form.value.name,
      link: form.value.link,
      answers: form.value.answers,
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
        this.paperName = this.paper.name;
        this.paperAnswers = this.paper.answers;
        this.paperLink = this.paper.link;
      } else {
        this.mode = 'new';
        this.paperId = null;
      }
    });
  }
}
