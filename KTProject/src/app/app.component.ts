import { Component } from '@angular/core';
import { TestService } from './test.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

})
export class AppComponent {

  title = 'my-first-project';
  
  'componentproperty' : String;
  'todaydate' : Date;

  constructor(private service: TestService){}

  ngOnInit(){
    this.todaydate = this.service.showTodayDate();
    console.log(this.service.serviceproperty);
    console.log(this.todaydate);//date printed in console.......
    this.service.serviceproperty = 'component created' //value changed
    this.componentproperty = this.service.serviceproperty;

  
  }
}
