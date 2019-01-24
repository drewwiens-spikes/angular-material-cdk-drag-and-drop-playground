import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasicComponent } from './basic/basic.component';
import { BasicDropListsComponent } from './basic-drop-lists/basic-drop-lists.component';
import { DropListGroupComponent } from './drop-list-group/drop-list-group.component';
import { UsingCssClassesComponent } from './using-css-classes/using-css-classes.component';
import { PredicatesComponent } from './predicates/predicates.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/basic' },
  { path: 'basic', component: BasicComponent },
  { path: 'drop-lists', component: BasicDropListsComponent },
  { path: 'drop-list-group', component: DropListGroupComponent },
  { path: 'using-css-classes', component: UsingCssClassesComponent },
  { path: 'predicates', component: PredicatesComponent },
  { path: '**', redirectTo: '/basic' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
