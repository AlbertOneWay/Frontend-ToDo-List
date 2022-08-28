import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { EditionTaskComponent } from './task/edition-task/edition-task.component';
import { ListTaskComponent } from './task/list-task/list-task.component';
import { RemoveTaskComponent } from './task/remove-task/remove-task.component';


@NgModule({
  declarations: [
    CreateTaskComponent,
    EditionTaskComponent,
    ListTaskComponent,
    RemoveTaskComponent
  ],
  imports: [
    CommonModule,
    ParametersRoutingModule
  ]
})
export class ParametersModule { }