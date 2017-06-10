import { Dispatcher } from "../shared/dispatcher";
import { ToDo, TodoAction, TODO_ACTION } from "./todoActions";
import { Inject } from "@angular/core";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/filter';

export class ToDoStore {
    private subject: BehaviorSubject<ToDo[]>;
    private store: { store: ToDo[] };
    public listChanged$: Observable<ToDo[]>;

    constructor(@Inject(TODO_ACTION) private dispatcher:Dispatcher<ToDo, TodoAction>){
        this.store = { store: [] };
        this.subject = new BehaviorSubject<ToDo[]>(this.store.store);
        this.listChanged$ = this.subject.asObservable();

        this.init();             
        this.registerOnAddItem();
        this.registerOnRemoveItem();


    }

    private init() {
        this.subject.next(Object.assign([], this.store.store));
    }

    private registerOnAddItem() {
        this.dispatcher.event$.filter(t=> t.action === TodoAction.ADD_ITEM)
            .subscribe(t=> {
                var item = t.item as ToDo;
                item.id = this.store.store.length > 0 ? 
                    this.store.store.map(t=>t.id).sort().reverse()[0] + 1 : 1;

                this.store.store.push(item);
                this.subject.next(Object.assign([], this.store.store));
            });

    }

    private registerOnRemoveItem() {
        this.dispatcher.event$.filter(t=> t.action === TodoAction.REMOVE_ITEM)
            .subscribe(t=> {
                var item = t.item as ToDo;
                var index = this.store.store.findIndex(x=> x.id === item.id);
                if (index >= 0) {
                    this.store.store.splice(index, 1);
                }
                this.subject.next(Object.assign([], this.store.store));
            });


    }

    
}