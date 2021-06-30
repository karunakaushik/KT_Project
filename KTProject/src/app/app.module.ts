import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { TestService } from './test.service';
import { HttpModule } from '@angular/http';
import { WtdetailsComponent } from './wtdetails/wtdetails.component';
import { CommandComponent } from './command/command.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DetailComponent,
    WtdetailsComponent,
    CommandComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AnimateOnScrollModule.forRoot(),
    IvyCarouselModule,
    HttpModule

  ],
  providers: [
    TestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
