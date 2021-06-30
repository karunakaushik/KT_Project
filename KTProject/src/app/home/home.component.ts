import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  detail='A gorgeous looking onepage and multipage site template with a unique portfolio that is suitable for photographers, viusal artists, digital studios, freelancers that would like to showcase their portfolio beautifully and bloggers to have appealing journals.';
  welcome = 'Welcome! This is Misso';
  constructor() {}

  ngOnInit(): void {
  }

}
