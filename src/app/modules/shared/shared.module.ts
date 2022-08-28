import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './toast/toast.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './modal/modal.component';
import { GetEstadoPipe } from './pipes/get-estado.pipe';


@NgModule({
  declarations: [
    ToastComponent,
    ModalComponent,
    GetEstadoPipe
  ],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    ToastComponent,
    ModalComponent,
    GetEstadoPipe
  ]
})
export class SharedModule { }