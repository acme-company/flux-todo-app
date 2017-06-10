import { Component, Inject, Input, ChangeDetectionStrategy, EventEmitter, Output, ElementRef } from '@angular/core';
import { ToDoStore } from "./services/todoStore";
import { ToDo, ToDoActions } from "./services/todoActions";

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent { 
  name = 'Angular'; 
  constructor (
    @Inject(ToDoStore) 
    public todoStore: ToDoStore,
    private todoActions:ToDoActions,
    private elementRef: ElementRef) {
      this.elementRef.nativeElement.addEventListener('mousemove', function() {
    });
  }

  openAddDialog() {
    $('.modal').modal('show');

  }

  add (item:ToDo) {
    this.todoActions.addItem(item);
    $('.modal').modal('hide');
  }

  remove(item:ToDo) {
    this.todoActions.removeItem(item);
  }
}
