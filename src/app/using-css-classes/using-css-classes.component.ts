import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-using-css-classes-component',
  templateUrl: './using-css-classes.component.html',
  styleUrls: ['./using-css-classes.component.css']
})
export class UsingCssClassesComponent {

  divs = [new FormControl(''), new FormControl(''), new FormControl('')];
  divarr = [['ONE', 'TWO', 'THREE'], [], ['FOUR']];

  constructor() { }

  drop(idx: number, event: CdkDragDrop<string[]>) {
    console.warn(`cdkDropListDropped in ${idx ? 'B' : 'A'}`, event);
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
