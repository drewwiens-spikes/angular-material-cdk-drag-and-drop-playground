import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drop-list-group',
  templateUrl: './drop-list-group.component.html',
  styleUrls: ['./drop-list-group.component.css']
})
export class DropListGroupComponent {

  divs = [new FormControl(''), new FormControl('')];
  divarr = [['ONE', 'TWO', 'THREE'], []];
  disab = new FormControl(false);

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
