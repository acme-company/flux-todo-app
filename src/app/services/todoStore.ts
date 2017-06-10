import { Dispatcher, Action } from "../shared/dispatcher";
import { ToDo, TodoAction, TODO_ACTION } from "./todoActions";
import { Inject } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/retry';

export class ToDoStore {
    private subject: BehaviorSubject<ToDo[]>;
    private store: { store: ToDo[] };
    public listChanged$: Observable<ToDo[]>;

    constructor( @Inject(TODO_ACTION) private dispatcher: Dispatcher<ToDo, TodoAction>) {
        this.store = { store: [] };
        this.subject = new BehaviorSubject<ToDo[]>(this.store.store);
        this.listChanged$ = this.subject.asObservable();

        this.notify();
        this.registerHandler(TodoAction.ADD_ITEM, (t) => this.addItem(t));
        this.registerHandler(TodoAction.REMOVE_ITEM, (t) => this.removeItem(t));


    }

    private notify() {
        this.subject.next(Object.assign([], this.store.store));
    }
    private addItem(item: ToDo) {
        item.id = this.store.store.length > 0 ?
            this.store.store.map(t => t.id).sort().reverse()[0] + 1 : 1;

        this.store.store.push(item);
    }
    private removeItem(item: ToDo) {
        var index = this.store.store.findIndex(x => x.id === item.id);
        if (index >= 0) {
            this.store.store.splice(index, 1);
        }
    }

    private registerHandler(action:TodoAction, handler: (item:ToDo)=>void) {
        var source = this.dispatcher.event$.filter(t => t.action === action);
        source
            .map(t => t.item as ToDo)
            .subscribe(t => { 
                handler(t);
                this.notify(); 
            });


    }

}