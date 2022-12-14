import { Directive, ViewContainerRef } from '@angular/core';
import { ViewContainerModalService } from '../../services/modal/view-container-modal.service';

/**
 * 
 */
@Directive({
  selector: '[modalContainer]'
})
export class ModalContainerDirective {
  constructor(viewContainer: ViewContainerRef, viewContainerModalService: ViewContainerModalService) {
    viewContainerModalService.referenciarViewContainer(viewContainer);
  }
}