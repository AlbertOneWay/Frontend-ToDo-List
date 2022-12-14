import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParametersRoutingModule } from './parameters-routing.module';
import { CreateTaskComponent } from './task/create-task/create-task.component';
import { EditionTaskComponent } from './task/edition-task/edition-task.component';
import { ListTaskComponent } from './task/list-task/list-task.component';
import { RemoveTaskComponent } from './task/remove-task/remove-task.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    CreateTaskComponent,
    EditionTaskComponent,
    ListTaskComponent,
    RemoveTaskComponent
  ],
  imports: [
    FontAwesomeModule,
    CommonModule,
    ParametersRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    NgxPaginationModule
  ]
})
export class ParametersModule { }
