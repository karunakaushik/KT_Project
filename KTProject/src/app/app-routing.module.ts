import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommandComponent } from './command/command.component';
import { DetailComponent } from './detail/detail.component';
import { HomeComponent } from './home/home.component';
import { WtdetailsComponent } from './wtdetails/wtdetails.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'detail', component:DetailComponent},
  {path: 'wtdetail', component : WtdetailsComponent},
  {path: 'command', component : CommandComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
