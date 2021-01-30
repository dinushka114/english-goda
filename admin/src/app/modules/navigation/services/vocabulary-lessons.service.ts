import { Router } from '@angular/router';
import { SnakbarService } from './../widgets-services/snakbar.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { VocabularyLesson } from '../../models/models';

@Injectable()
export class VocabularyLessonService {
  constructor(private http: HttpClient, private snakbar: SnakbarService,private router:Router) {}

  // vocabularyLessonUrl = 'http://localhost:3000/api/admin/vocabulary';
  vocabularyLessonUrl = 'https://still-reef-77817.herokuapp.com/api/admin/vocabulary';

  vocabularyLessons: VocabularyLesson[] = [];
  vocabularyLessonUpdated = new Subject<VocabularyLesson[]>();

  getVocabularyLessons() {
    this.http
      .get<VocabularyLesson[]>(this.vocabularyLessonUrl)
      .subscribe((res) => {
        this.vocabularyLessons = res;
        this.vocabularyLessonUpdated.next([...this.vocabularyLessons]);
        return this.vocabularyLessons;
      });
  }

  createNewVocabularyLesson(lesson:any){
    const vocLesson = {title:lesson.title,content:lesson.content,category:lesson.category,Isdraft:lesson.Isdraft};
    this.http
      .post(this.vocabularyLessonUrl + '/new', vocLesson)
      .subscribe((res) => {
        this.snakbar.openSnakbar('Lesson Created Sucessfully!!', 'Lesson');
        this.vocabularyLessons.push(lesson);
        this.vocabularyLessonUpdated.next([...this.vocabularyLessons]);
        this.router.navigate(['/dashboard/vocabulary-list']);
      });
  }

  updateVocabularyLesson(id: string, lesson: any) {
    const updatedLesson = {
      title: lesson.title,
      content: lesson.content,
      category: lesson.category,
      Isdraft:lesson.Isdraft
    };
    this.http
      .put(this.vocabularyLessonUrl + '/update/' + id, lesson)
      .subscribe((res) => {
        console.log(res);
        this.snakbar.openSnakbar("Lesson Updated!!" ,"Lesson");
        this.router.navigate(['/dashboard/vocabulary-list']);
      });
  }

  getVocabularyLessonUpdateListner() {
    return this.vocabularyLessonUpdated.asObservable();
  }

  getVocabularyLesson(id: string) {
    return { ...this.vocabularyLessons.find((lesson) => lesson._id === id) };
  }

  deleteVocabularyLesson(id: string) {
    this.http
      .delete(this.vocabularyLessonUrl + '/delete/' + id)
      .subscribe((res) => {
        //   console.log(res);
        const updatedVocabularyLessons = this.vocabularyLessons.filter(
          (lesson) => lesson._id !== id
        );
        this.vocabularyLessons = updatedVocabularyLessons;
        this.vocabularyLessonUpdated.next([...this.vocabularyLessons]);
        this.snakbar.openSnakbar(
          'Lesson Deleted Sucessfully!!',
          'Lesson Deleted'
        );
      });
  }
}
