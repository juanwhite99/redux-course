import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';

@Pipe({
  name: 'filterTodo'
})
export class FilterPipe implements PipeTransform {

  transform(todos: Todo[] | undefined, filter: string): Todo[] | undefined {
    switch(filter) {
      case 'completed':
        return todos?.filter(todo => todo.completed)
      case 'pending':
        return todos?.filter(todo => !todo.completed)
      default:
        return todos;
    }
  }
}
