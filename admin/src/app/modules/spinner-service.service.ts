import { Injectable } from '@angular/core';
import {MatProgressSpinner} from '@angular/material/progress-spinner';

@Injectable({
  providedIn: 'root'
})
export class SpinnerServiceService {

  constructor(private matSpinner:MatProgressSpinner) { }

  // addSpinner(isLoading:boolean){
  //   this.matSpinner.
  // }

}
