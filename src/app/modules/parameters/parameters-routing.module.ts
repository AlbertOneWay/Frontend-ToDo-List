import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { EditionTaskComponent } from './task/edition-task/edition-task.component';
import { ListTaskComponent } from './task/list-task/list-task.component';
import { RemoveTaskComponent } from './task/remove-task/remove-task.component';

const routes: Routes = [
  {
    path: "create-task",
    component: CreateTaskComponent
  },
  {
    path: "edition-task",
    component: EditionTaskComponent
  },
  {
    path: "list-task",
    component: ListTaskComponent
  },
  {
    path: "remove-task",
    component: RemoveTaskComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParametersRoutingModule { }
