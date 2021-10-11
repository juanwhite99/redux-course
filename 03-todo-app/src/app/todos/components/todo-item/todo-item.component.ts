import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Todo } from '../../models/todo.model';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as actions from '../../store/todo.actions';
import { AppState } from '../../../app.reducer';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.sass']
})
export class TodoItemComponent implements OnInit {
  @Input() todo!: Todo;
  @ViewChild('todoInput') todoInput!: ElementRef;

  chkCompletado!: FormControl;
  txtInput!: FormControl;
  editing: boolean = false;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.chkCompletado = new FormControl(this.todo.completed);
    this.txtInput = new FormControl(this.todo.text, [Validators.required]);

    this.chkCompletado.valueChanges.subscribe( value => {
      this.store.dispatch(actions.toggle({id: this.todo.id}));
    });
  }

  editMode() {
    this.editing = true;
    this.txtInput.setValue(this.todo.text);
    setTimeout(() => {
      this.todoInput.nativeElement.select();
    }, 1);
  }

  finishEdition() {
    this.editing = false;
    if(this.txtInput.invalid) return;
    if(this.txtInput.value === this.todo.text) return;

    this.store.dispatch(
      actions.edit({
        id: this.todo.id,
        text: this.txtInput.value
      })
    );
  }

  deleteTodo() {
    this.store.dispatch(actions.deleteTodo({id: this.todo.id}));
  }

}
