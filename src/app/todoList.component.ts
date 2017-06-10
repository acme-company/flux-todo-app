import { ToDo } from "./services/todoActions";
import { Input, Output, EventEmitter, ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'todoList',
  template: `
    <ul>
      <li *ngFor="let item of items">
          {{ item.name }} <button (click)="remove(item)">Remove</button>
      </li>
  </ul>
 {{ change() }}
  `,changeDetection: ChangeDetectionStrategy.OnPush
})
export class TodoListComponent {
   @Input() items: ToDo[];
   @Output() itemRemoved: EventEmitter<ToDo>;
   changed:number = 0;

   change() {
     ++this.changed;
     return this.changed;
   }

   constructor() {
     this.itemRemoved = new EventEmitter<ToDo>();
   }
   remove(item:ToDo) {
     this.itemRemoved.next(item);
   }
}