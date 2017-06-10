import { Component, Inject, Input, ChangeDetectionStrategy, EventEmitter, Output, ElementRef, ViewChild } from '@angular/core';
import { ToDoStore } from "./services/todoStore";
import { ToDo, ToDoActions } from "./services/todoActions";
import { AddTodoComponent } from "./addTodo.component";

@Component({
  selector: 'app',
  templateUrl: './app.component.html'
})
export class AppComponent { 
  @ViewChild('dialog') dialog:ElementRef;
  name = 'Angular'; 
  constructor (
    @Inject(ToDoStore) public todoStore: ToDoStore, 
      private todoActions:ToDoActions, private elementRef: ElementRef) {
        this.elementRef.nativeElement.addEventListener('mousemove', function() {
    });
  }

  openDialog() {
    $('#myModal',this.dialog.nativeElement).modal('show');

  }

  add (item:ToDo) {
    
    this.todoActions.addItem(item).then(()=> {
      $('#myModal',this.dialog.nativeElement).modal('hide');
    });
  }

  remove(item:ToDo) {
    this.todoActions.removeItem(item);
  }
}
