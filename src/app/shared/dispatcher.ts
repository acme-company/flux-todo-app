import { Subject } from "rxjs/Subject";
import { Observable } from "rxjs/Observable";
export interface Action<T,A> {
    item:T | T[];
    action: A;
}

export class Dispatcher<T, A> {
    subject: Subject<Action<T, A>>;
    public event$: Observable<Action<T, A>>;

    constructor() {
        this.subject = new Subject<Action<T, A>>();
        this.event$ = this.subject.asObservable();
    }

    dispatch(payload:Action<T, A>) : Promise<any> {
        return new Promise((resolve, reject) => {
            try {
                this.subject.next(payload);
                resolve(payload);
            }
            catch (error) {
                reject(error);
            }
        });
    }
}