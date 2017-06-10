import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TodoListComponent } from "./todoList.component";
import { TODO_PROVIDERS } from "./services/todoProviders";

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, TodoListComponent ],
  providers: [ 
      TODO_PROVIDERS
   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
