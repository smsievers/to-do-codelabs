import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardslistComponent } from './boardslist/boardslist.component';
import { BoardviewComponent } from './boardview/boardview.component';
import { CreateboardComponent } from './createboard/createboard.component';
import { CreatelistComponent } from './createlist/createlist.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'boardview/:id', component: BoardviewComponent},
  {path: 'boards', component: BoardslistComponent},
  {path: 'createboard', component: CreateboardComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'sign-up', component: SignUpComponent},
  {path: 'createlist/:id', component: CreatelistComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
