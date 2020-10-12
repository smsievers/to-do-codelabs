import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardslistComponent } from './boardslist/boardslist.component';
import { BoardviewComponent } from './boardview/boardview.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'boardview/:id', component: BoardviewComponent},
  {path: 'boards', component: BoardslistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
