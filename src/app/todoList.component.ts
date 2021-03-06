import { ToDo } from "./services/todoActions";
import { Input, Output, EventEmitter, ChangeDetectionStrategy, Component } from "@angular/core";

@Component({
  selector: 'todoList',
  template: `
<div class="panel panel-primary">
  <!-- Default panel contents -->
  <div class="panel-heading">To Do Items</div>
  <div class="panel-body">
    <p>Add To Do Items.</p>
  </div>

  <!-- Table -->
  <table class="table">
    <thead>
      <tr>
        <td>ID</td>
        <td>Name</td>
        <td></td>
      </tr>
    </thead>
    <tbody>
      <tr  *ngFor="let item of items">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td><button class="btn btn-xs btn-danger pull-right" (click)="remove(item)">Remove</button></td>
      </tr>
    </tbody>
  </table>
</div>


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