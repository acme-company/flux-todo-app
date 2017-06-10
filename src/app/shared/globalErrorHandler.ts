import { ErrorHandler, Injector, Inject } from '@angular/core';
import { ErrorActions, GeneralError, ERROR_ACTION, ErrorAction } from '../services/errorActions';
import { Dispatcher } from "./dispatcher";
import * as StackTrace from 'stacktrace-js';

export class GlobalErrorHandler implements ErrorHandler {
  constructor(private errorActions: ErrorActions, @Inject(ERROR_ACTION) private dispatcher: Dispatcher<GeneralError, ErrorAction>) {

  }


  dispatchError(error: any) {
    
    StackTrace.fromError(error)
      .then((sf) => {
        this.dispatcher.dispatch({
          item: {
            message: error.message,
            stacktrace: sf.map((t) => t.toString()).join('\n'),
            error: error
          },
          action: ErrorAction.REPORT_ERROR
        });
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  handleError(error: Response | any) {
  
    if (error.promise) {
      this.dispatchError(error.rejection);
    }
    else {
      this.dispatchError(error);
    }
  }
}

