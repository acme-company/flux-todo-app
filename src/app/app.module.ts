import { NgModule, ErrorHandler }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoListComponent } from "./todoList.component";
import { AddTodoComponent } from "./addTodo.component";
import { ErrorComponent } from './error.component';
import { GlobalErrorHandler } from './shared/globalErrorHandler';
import { TODO_PROVIDERS } from "./services/todoProviders";
import { ERROR_PROVIDERS} from "./services/errorProviders";

@NgModule({
  imports:      [ BrowserModule,ReactiveFormsModule  ],
  declarations: [ AppComponent, TodoListComponent, AddTodoComponent, ErrorComponent ],
  providers: [ 
      { provide: ErrorHandler, useClass: GlobalErrorHandler },
      TODO_PROVIDERS,
      ERROR_PROVIDERS
   ],
  bootstrap:    [ AppComponent, ErrorComponent ]
})
export class AppModule { }
