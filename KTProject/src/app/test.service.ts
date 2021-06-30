import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  serviceproperty = "Service Created";
  constructor() { }
  showTodayDate() {
    let ndate = new Date;
    return ndate;
  }
}
