import { NgModule, ErrorHandler }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule  } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoListComponent } from "./todoList.component";
import { AddTodoComponent } from "./addTodo.component";
import { ErrorComponent } from './shared/error.component';
import { ErrorViewComponent } from './shared/errorView.component';
import { GlobalErrorHandler } from './shared/globalErrorHandler';
import { TODO_PROVIDERS } from "./services/todoProviders";
import { ERROR_PROVIDERS} from "./services/errorProviders";

@NgModule({
  imports:      [ BrowserModule,ReactiveFormsModule  ],
  declarations: [ 
    AppComponent, 
    TodoListComponent, 
    AddTodoComponent, 
    ErrorComponent, 
    ErrorViewComponent 
  ],
  providers: [ 
      { provide: ErrorHandler, useClass: GlobalErrorHandler },
      TODO_PROVIDERS,
      ERROR_PROVIDERS
   ],
  bootstrap:    [ AppComponent, ErrorComponent ]
})
export class AppModule { }
