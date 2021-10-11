import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

// Components
import { todoComponentsArray, TodoPageComponent } from './components';
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [
    todoComponentsArray,
    TodoPageComponent,
    FilterPipe
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    TodoPageComponent
  ]
})
export class TodoModule { }
