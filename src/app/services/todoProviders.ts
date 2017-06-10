
import { TODO_ACTION, ToDoActions, ToDo, TodoAction } from "./todoActions";
import { ToDoStore } from "./todoStore";
import { Dispatcher } from "../shared/dispatcher";

export function todoFactory() {
  return new Dispatcher<ToDo, TodoAction>();
}

export const TODO_PROVIDERS = [ToDoActions, ToDoStore, { provide: TODO_ACTION, useFactory: todoFactory }];
