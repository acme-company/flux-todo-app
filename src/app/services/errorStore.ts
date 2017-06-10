import { Dispatcher } from "../shared/dispatcher";
import { GeneralError, ErrorAction, ERROR_ACTION } from "./errorActions";
import { Inject } from "@angular/core";
import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/filter';

export class ErrorStore {
    private subject: Subject<GeneralError[]>;
    private store: { store: GeneralError[] };
    public listChanged$: Observable<GeneralError[]>;

    constructor(@Inject(ERROR_ACTION) private dispatcher:Dispatcher<GeneralError, ErrorAction>){
        this.store = { store: [] };
        this.subject = new Subject<GeneralError[]>();
        this.listChanged$ = this.subject.asObservable();
        this.registerOnReport();
    }

    private registerOnReport() {
        this.dispatcher.event$.filter(t=> t.action === ErrorAction.REPORT_ERROR)
            .subscribe(t=> {
                var item = t.item as GeneralError;
                this.store.store.push(item);
                this.subject.next(Object.assign([], this.store.store));
            });

    }
    
}