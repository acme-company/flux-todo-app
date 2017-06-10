import { Inject, OpaqueToken } from '@angular/core';
import { Dispatcher } from '../shared/dispatcher';
export const TODO_ACTION = new OpaqueToken('ToDoAction'); 

export interface ToDo {
    id: number;
    name:string;
}

export enum TodoAction {
    
    ADD_ITEM,
    REMOVE_ITEM
}

export class ToDoActions {
    constructor(@Inject(TODO_ACTION) private dispatcher:Dispatcher<ToDo, TodoAction>){

    }

    addItem(todo: ToDo) {
        return this.dispatcher.dispatch({
            item: todo,
            action: TodoAction.ADD_ITEM
        })
    }
    removeItem(todo: ToDo) {
        return this.dispatcher.dispatch({
            item:todo,
            action: TodoAction.REMOVE_ITEM
        })
    }
}