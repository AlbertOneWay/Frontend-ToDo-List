import { Component, ElementRef, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import Modal from "bootstrap/js/dist/modal";

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  modalHeader?: string;
  modalBody?: string;
  esModalConfirm?: boolean = false;

  @ViewChild('modalTemplate', { static: true }) modalTemplate?: ElementRef;
  modal?: Modal;

  @Output() confirmEvent = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
  }

  openModal(): void {
    this.modal = new Modal(this.modalTemplate?.nativeElement, {});
    this.modal.show();
  }

  closeModal(): void {
    this.modal?.hide();
    this.modal?.dispose();
  }

  confirmModal(confirm: boolean) {
    this.confirmEvent.emit(confirm || false);

    this.closeModal();
  }
}
