import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToDo } from "./services/todoActions";


@Component({
    selector: 'add-todo',
    templateUrl: './addTodo.component.html'
})
export class AddTodoComponent implements OnInit {
    formGroup: FormGroup;
    @Output() onAdd: EventEmitter<ToDo>;

    constructor(private fb:FormBuilder) {
        this.onAdd = new EventEmitter<ToDo>();
        this.formGroup = fb.group({
            'name': ['']
        });
     }

    ngOnInit() { }

    onSave() {
        
        this.onAdd.next(this.formGroup.value);
        this.formGroup = this.fb.group({
            'name': ['']
        });

    }

    onDismiss() {
        this.formGroup = this.fb.group({
            'name': ['']
        });        
    }
}