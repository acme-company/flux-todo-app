import { Component, Inject, Input, ChangeDetectionStrategy, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ErrorStore } from "../services/errorStore";
import { GeneralError, ErrorActions } from "../services/errorActions";

@Component({
  selector: 'errorView',
  templateUrl: './errorView.component.html'
})
export class ErrorViewComponent implements AfterViewInit { 
  errors: GeneralError[];
  @ViewChild('dialog') dialog:ElementRef;
  constructor (public errorStore: ErrorStore) { 
   
  }
 
  ngAfterViewInit() {
      this.errorStore.listChanged$.subscribe(t=> {
         this.errors = t.slice().reverse();
         this.errors.forEach(t=> t.stacktrace = t.stacktrace.replace('\n','<br />'));
      });

  }

}
