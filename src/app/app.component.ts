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

  add() {
    $('.modal').modal('show');
    this.todoActions.addItem({
      id:0,
      name: 'Something Else'
    });
  }

  remove(item:ToDo) {
    this.todoActions.removeItem(item);
  }
}
