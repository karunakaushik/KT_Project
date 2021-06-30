import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { map} from 'rxjs/operators';
import { Http } from '@angular/http';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  
   'todaydate' : Date;
  images = [
    {path: '../../assets/image/cycle.jpg'},
    {path: '../../assets/image/couple.jpg'},
    {path: '../../assets/image/c1.jpg'},
    {path: '../../assets/image/c2.jpg'},
    {path: '../../assets/image/c3.jpg'},
    {path: '../../assets/image/c4.jpg'},
    {path: '../../assets/image/c5.jpg'},
    {path: '../../assets/image/c6.jpg'},
]

  constructor( private service: TestService ,  private http:Http) { }
  'httpdata' : any;

  ngOnInit(){
        this.todaydate = this.service.showTodayDate();
        this.http.get("http://jsonplaceholder.typicode.com/users")
        .pipe(map(
          (response: any) => response.json())
          ).
        subscribe( 
          // (data) =>console.log(data),
          (data) => {this.displaydata(data);}
          )
      
    }

    displaydata(data : any) {
      this.httpdata = data;
      console.log(data);
    }

}
