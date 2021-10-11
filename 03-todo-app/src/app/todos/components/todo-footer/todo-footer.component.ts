import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from 'src/app/filter/filter.actions';
import { AppState } from '../../../app.reducer';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.sass']
})
export class TodoFooterComponent implements OnInit {
  currentFilter: string = 'all';
  filters: string[] = ['all', 'pending', 'completed'];
  pendings: number = 0;

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.subscribe(state => {
      this.currentFilter = state.filter;
      this.pendings = state.todos.filter(todo => !todo.completed).length;
    });
  }

  changeFilter(filter: string) {
    this.store.dispatch(actions.setFilter({ filter: filter }));
  }

}
