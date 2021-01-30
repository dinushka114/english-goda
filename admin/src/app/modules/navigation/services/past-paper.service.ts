import { Router } from '@angular/router';
import { SnakbarService } from './../widgets-services/snakbar.service';
import { Subject } from 'rxjs';
import { Paper } from './../../models/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable()
export class PastPaperService {
  constructor(private http: HttpClient,private snakService:SnakbarService,private router:Router) {}

  papers: Paper[] = [];
  papersUpdated = new Subject<Paper[]>();
  // private paperUrl = 'http://localhost:3000/api/admin/past-papers';
  private paperUrl = 'https://still-reef-77817.herokuapp.com/api/admin/past-papers';

 private gitLink = "https://raw.githubusercontent.com/learn-english-one0/pdfs/master/";

  getPapers() {
    this.http.get<Paper[]>(this.paperUrl).subscribe((res) => {
      this.papers = res;
      this.papersUpdated.next([...this.papers]);
      return this.papers;
    });
  }

  getPaperUpdateLisnter(){
      return this.papersUpdated.asObservable()
  }

  getPaper(id:string){
    return {...this.papers.find(paper=>paper._id===id)};
  }

  createPaper(paper:any){
    const newPaper = {name:paper.name , link:this.gitLink+paper.link , answers:paper.answers}
    this.http.post(this.paperUrl+"/new" , newPaper)
    .subscribe(res=>{
        this.snakService.openSnakbar('Paper Created Sucessfully!!', 'Paper');
        this.papers.push(paper);
        this.papersUpdated.next([...this.papers]);
        this.router.navigate(['/dashboard/past-papers']);
    })
  }

  updatePaper(id:string,paper:any){
    const updatedPaper = {name:paper.name, link:paper.link , answers:paper.answers}
    this.http.put(this.paperUrl+"/update/"+id , paper)
    .subscribe(res=>{
        this.snakService.openSnakbar("Paper Updated!!" ,"Paper");
        this.router.navigate(['/dashboard/past-papers']);
    })
  }

  deletePaper(id:string){
    this.http.delete(this.paperUrl+"/delete/"+id)
    .subscribe(res=>{
      //   console.log(res);
        const updatedPapers = this.papers.filter(paper=>paper._id!==id);
        this.papers = updatedPapers;
        this.papersUpdated.next([...this.papers]);
        this.snakService.openSnakbar('Paper Deleted Sucessfully!!', 'Paper Deleted');
    })
}
}
