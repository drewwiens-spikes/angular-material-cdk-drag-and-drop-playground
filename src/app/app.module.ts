import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './basic/basic.component';
import { BasicDropListsComponent } from './basic-drop-lists/basic-drop-lists.component';
import { DropListGroupComponent } from './drop-list-group/drop-list-group.component';
import { UsingCssClassesComponent } from './using-css-classes/using-css-classes.component';
import { PredicatesComponent } from './predicates/predicates.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    BasicDropListsComponent,
    DropListGroupComponent,
    UsingCssClassesComponent,
    PredicatesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
