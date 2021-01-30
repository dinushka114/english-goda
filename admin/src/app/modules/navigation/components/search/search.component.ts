import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor() { }

  @Output() searchTextEvent = new EventEmitter<string>();

  search!:string;

  ngOnInit(): void {
  }

  addNewValue(value:KeyboardEvent){
    // console.log(this.search);
    this.searchTextEvent.emit(this.search);
  }

}
