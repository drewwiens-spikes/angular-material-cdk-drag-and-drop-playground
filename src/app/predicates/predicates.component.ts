import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem, CdkDrag } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-predicates',
  templateUrl: './predicates.component.html',
  styleUrls: ['./predicates.component.css']
})
export class PredicatesComponent {

  divs = [new FormControl(''), new FormControl('')];
  divarr = [['ONE', 'TWO', 'THREE'], []];

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

  twoPredicate(item: CdkDrag<string>) {
    return item.data === 'TWO';
  }

  noop() {
    return true;
  }

}
