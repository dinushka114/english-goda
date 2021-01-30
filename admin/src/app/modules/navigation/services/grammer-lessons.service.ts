import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { GrammerLesson } from '../../models/models';
import { SnakbarService } from '../widgets-services/snakbar.service';

@Injectable()
export class GrammerLessonService {
  // private grammerLessonUrl = "http://localhost:3000/api/admin/grammer-lessons";
  private grammerLessonUrl = 'https://still-reef-77817.herokuapp.com/api/admin/grammer-lessons';

  grammerLessons: GrammerLesson[] = [];
  grammerLessonUpdated = new Subject<GrammerLesson[]>();

  constructor(
    private http: HttpClient,
    private snakService: SnakbarService,
    private router: Router
  ) {}

  getGrammerLessons() {
    this.http.get<GrammerLesson[]>(this.grammerLessonUrl).subscribe((res) => {
      this.grammerLessons = res;
      this.grammerLessonUpdated.next([...this.grammerLessons]);
      return this.grammerLessons;
    });
  }

  createNewGrammerLesson(lesson: any) {
    const newLesson = {
      title: lesson.title,
      content: lesson.content,
      category: lesson.category,
      Isdraft:lesson.Isdraft
    };
    this.http
      .post(this.grammerLessonUrl + '/new', newLesson)
      .subscribe((res) => {
        this.snakService.openSnakbar('Lesson Created Sucessfully!!', 'Lesson');
        this.grammerLessons.push(lesson);
        this.grammerLessonUpdated.next([...this.grammerLessons]);
        this.router.navigate(['/dashboard/grammer-list']);
      });
  }

  updateGrammerLesson(id: string, lesson: any) {
    const updatedLesson = {
      title: lesson.title,
      content: lesson.content,
      category: lesson.category,
      Isdraft:lesson.Isdraft
    };
    this.http
      .put(this.grammerLessonUrl + '/update/' + id, lesson)
      .subscribe((res) => {
        // console.log(res);
        this.snakService.openSnakbar("Lesson Updated!!" ,"Lesson");
        this.router.navigate(['/dashboard/grammer-list']);
      });
  }

  deleteGrammerLesson(id:string){
      this.http.delete(this.grammerLessonUrl+"/delete/"+id)
      .subscribe(res=>{
        //   console.log(res);
          const updatedGrammerLessons = this.grammerLessons.filter(lesson=>lesson._id!==id);
          this.grammerLessons = updatedGrammerLessons;
          this.grammerLessonUpdated.next([...this.grammerLessons]);
          this.snakService.openSnakbar('Lesson Deleted Sucessfully!!', 'Lesson Deleted');
      })
  }

  getGrammerLessonUpdatListner() {
    return this.grammerLessonUpdated.asObservable();
  }

  getGrammerLesson(id: string) {
    return { ...this.grammerLessons.find((lesson) => lesson._id === id) };
  }
}
