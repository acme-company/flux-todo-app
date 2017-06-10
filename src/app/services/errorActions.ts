import { Inject, OpaqueToken } from '@angular/core';
import { Dispatcher } from '../shared/dispatcher';
export const ERROR_ACTION = new OpaqueToken('ErrorAction'); 

export interface GeneralError {
    message:string;
    stacktrace: string;
    error: Error;
}

export enum ErrorAction {
    
    REPORT_ERROR
}

export class ErrorActions {
    constructor(@Inject(ERROR_ACTION) private dispatcher:Dispatcher<GeneralError, ErrorAction>){

    }

    report(error:GeneralError) {
        return this.dispatcher.dispatch({
            item: error,
            action: ErrorAction.REPORT_ERROR
        })
    }
}