import { Component, ChangeDetectorRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Subject, Observable, timer } from 'rxjs';
import { mergeMap, mapTo, startWith, tap } from 'rxjs/operators';

const blinkTimeMs = 1000;

@Component({
  selector: 'app-basic-drop-lists',
  templateUrl: './basic-drop-lists.component.html',
  styleUrls: ['./basic-drop-lists.component.css']
})
export class BasicDropListsComponent {

  // =============================================================
  // Warning: This code is MESSY! I don't recommend trying to read
  // this code to learn the drag-drop API. Rather, see StackBlitz
  // examples, the slides, and material.angular.io.
  // =============================================================

  divs = [new FormControl(''), new FormControl('')];
  orie = [new FormControl('vertical'), new FormControl('vertical')];
  disab = [new FormControl(false), new FormControl(false)];
  divarr = [['ONE', 'TWO', 'THREE'], []];

  droppedSubj = [new Subject<void>(), new Subject<void>()];
  enteredSubj = [new Subject<void>(), new Subject<void>()];
  exitedSubj = [new Subject<void>(), new Subject<void>()];
  sortedSubj = [new Subject<void>(), new Subject<void>()];

  droppedBlinks: Observable<string>[] = [];
  enteredBlinks: Observable<string>[] = [];
  exitedBlinks: Observable<string>[] = [];
  sortedBlinks: Observable<string>[] = [];

  constructor(cd: ChangeDetectorRef) {
    for (let i = 0; i < 2; i++) {
      this.droppedBlinks.push(this.droppedSubj[i].pipe(
        mergeMap(() => timer(blinkTimeMs).pipe(mapTo('dim'), startWith('bright'))),
        startWith('dim'),
        tap(() => setTimeout(() => cd.detectChanges())), // not great timing bug fix
      ));
      this.enteredBlinks.push(this.enteredSubj[i].pipe(
        mergeMap(() => timer(blinkTimeMs).pipe(mapTo('dim'), startWith('bright'))),
        startWith('dim'),
        tap(() => setTimeout(() => cd.detectChanges())), // not great timing bug fix
      ));
      this.exitedBlinks.push(this.exitedSubj[i].pipe(
        mergeMap(() => timer(blinkTimeMs).pipe(mapTo('dim'), startWith('bright'))),
        startWith('dim'),
        tap(() => setTimeout(() => cd.detectChanges())), // not great timing bug fix
      ));
      this.sortedBlinks.push(this.sortedSubj[i].pipe(
        mergeMap(() => timer(blinkTimeMs).pipe(mapTo('dim'), startWith('bright'))),
        startWith('dim'),
        tap(() => setTimeout(() => cd.detectChanges())), // not great timing bug fix
      ));
    }
  }

  drop(idx: number, event: CdkDragDrop<string[]>) {
    console.warn(`cdkDropListDropped in ${idx ? 'B' : 'A'}`, event);
    this.droppedSubj[idx].next();
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

  entered(idx: number, event: any) {
    console.warn(`cdkDropListEntered in ${idx ? 'B' : 'A'}`, event);
    this.enteredSubj[idx].next();
  }

  exited(idx: number, event: any) {
    console.warn(`cdkDropListExited in ${idx ? 'B' : 'A'}`, event);
    this.exitedSubj[idx].next();
  }

  sorted(idx: number, event: any) {
    console.warn(`cdkDropListSorted in ${idx ? 'B' : 'A'}`, event);
    this.sortedSubj[idx].next();
  }

}
