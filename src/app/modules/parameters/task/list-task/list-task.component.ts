import { Component, OnDestroy, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/parameters/task.model';
import { TaskService } from 'src/app/services/parameters/task.service';
import { faPlus,faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'src/app/services/toast/toast.service';
import { Subscription } from 'rxjs';
import { ModalData } from 'src/app/models/shred/modal-data';
import { GeneralData } from 'src/app/config/general-data';
import { ModalService } from '../../../../services/modal/modal.service';
import { ToastData } from 'src/app/models/shred/toast-data';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit, OnDestroy {
  private subscription: Subscription = new Subscription();
  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(
    private service: TaskService,
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private modalService: ModalService
  ) { } 

  recordList: TaskModel[] = [];
  ngOnInit(): void {
    this.GetRecordList();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  GetRecordList(){
    this.service.GetRecordList().subscribe({
      next:(data: TaskModel[]) =>{
        this.recordList = data;
      }
    })
  }

  removeRecord(id: number | undefined){
    const mensajeModal: ModalData = {
      header: GeneralData.ARG_ELIMINACION,
      body: GeneralData.CONFIRMACION_ELIMINACION,
      esModalConfirm: true
    };
    const modalSubscription = this.modalService.openModal(mensajeModal)?.subscribe(confirmacion => {
      if(id && confirmacion){
        
        this.service.deleteRecord(id).subscribe({
          next: (data: TaskModel) =>{
            const mensajeToast: ToastData = {
              type: 'success',
              message: GeneralData.TOAST_MESSAGE_DELETE('La tarea')
            }
            this.toastService.openToast(mensajeToast);

            this.router.navigateByUrl('/', {skipLocationChange: true})
            .then(()=>this.router.navigate(['/parameters/list-task']))
          },
          error: (err:any)=>{
            const mensajeToast: ToastData = {
              type: 'error',
              message: GeneralData.TOAST_ERROR_DELETE('La tarea')
            }
            this.toastService.openToast(mensajeToast);
          }
        });
      }
    });
    
    this.subscription.add(modalSubscription);
  }
  

}
