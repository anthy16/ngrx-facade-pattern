import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { todoReducer } from './store/reducers/todo.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { AddTodoDialogComponent } from './add-todo-dialog/add-todo-dialog.component';
import { FormsModule } from '@angular/forms';
import { EditTodoDialogComponent } from './edit-todo-dialog/edit-todo-dialog.component';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

@NgModule({
  declarations: [AppComponent, TodoListComponent, AddTodoDialogComponent, EditTodoDialogComponent],
  imports: [
    FormsModule,
    BrowserModule,
    StoreModule.forRoot({todo: todoReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [{provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 2000}}],
  bootstrap: [AppComponent],
})
export class AppModule {}
