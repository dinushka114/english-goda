import { Router } from '@angular/router';
import { Essay, GrammerLesson } from './../../models/models';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { SnakbarService } from '../widgets-services/snakbar.service';

@Injectable()
export class essayService {
  constructor(
    private http: HttpClient,
    private snakbar: SnakbarService,
    private router: Router
  ) {}

  private essayUrl = 'https://still-reef-77817.herokuapp.com/api/admin/essays';
  // private essayUrl = 'http://localhost:3000/api/admin/essays';

  essays: Essay[] = [];
  essayUpdated = new Subject<Essay[]>();

  getEssays() {
    this.http.get<Essay[]>(this.essayUrl).subscribe((res) => {
      this.essays = res;
      this.essayUpdated.next([...this.essays]);
      return this.essays;
    });
  }

  createEssay(essay: any) {
    const newEssay = { title: essay.title, content: essay.content };

    this.http.post(this.essayUrl + '/new', newEssay).subscribe((res) => {
      this.snakbar.openSnakbar('Essay created!!', 'essay');
      this.essays.push(essay);
      this.essayUpdated.next([...this.essays]);
      this.router.navigate(['/dashboard/essay-list']);
    });
  }

  updateEssay(id: string, essay: any) {
    this.http.put(this.essayUrl + '/update/' + id, essay).subscribe((res) => {
      this.snakbar.openSnakbar('Essay Updated', 'Essay Update');
      this.router.navigate(['/dashboard/essay-list']);
    });
  }

  deleteEssay(id: string) {
    this.http.delete(this.essayUrl + '/delete/' + id).subscribe((res) => {
      const updatedEssays = this.essays.filter((essay) => essay._id !== id);
      this.essays = updatedEssays;
      this.essayUpdated.next([...this.essays]);
      this.snakbar.openSnakbar('Essay Delete Sucessfully!!', 'Essay Deleted');
    });
  }

  getEssaysUpdatListner() {
    return this.essayUpdated.asObservable();
  }

  getEssay(id: string) {
    return { ...this.essays.find((essay) => essay._id === id) };
  }
}
