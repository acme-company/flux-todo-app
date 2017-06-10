import { Component, Inject, Input, ChangeDetectionStrategy, EventEmitter, Output, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { ErrorStore } from "../services/errorStore";
import { GeneralError, ErrorActions } from "../services/errorActions";

@Component({
  selector: 'error',
  templateUrl: './error.component.html'
})
export class ErrorComponent implements AfterViewInit { 
  name = 'Angular'; 
  error: GeneralError;
  @ViewChild('dialog') dialog:ElementRef;
  constructor (public errorStore: ErrorStore) { 
   
  }
 
  ngAfterViewInit() {
      this.errorStore.listChanged$.subscribe(t=> {
         this.error = t.slice().reverse()[0];
         this.error.stacktrace = this.error.stacktrace.replace('\n','<br />');
         this.openDialog();
      });
      $(this.dialog.nativeElement).modal({
        backdrop: 'static',
        show: false,
        keyboard: false
      });

  }

  openDialog() {
    $(this.dialog.nativeElement).modal('show');
  }

  onDismiss() {
  }
  onRefresh() {
     window.location.href =  window.location.href;
  }

}
