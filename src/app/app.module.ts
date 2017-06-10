import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoListComponent } from "./todoList.component";
import { AddTodoComponent } from "./addTodo.component";
import { TODO_PROVIDERS } from "./services/todoProviders";

@NgModule({
  imports:      [ BrowserModule,ReactiveFormsModule  ],
  declarations: [ AppComponent, TodoListComponent, AddTodoComponent ],
  providers: [ 
      TODO_PROVIDERS
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
