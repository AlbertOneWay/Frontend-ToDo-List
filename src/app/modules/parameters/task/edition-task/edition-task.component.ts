import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { ToastData } from 'src/app/models/shred/toast-data';
import { GeneralData } from 'src/app/config/general-data';
import { ToastService } from 'src/app/services/toast/toast.service';
import { TaskService } from 'src/app/services/parameters/task.service';
import { TaskModel } from 'src/app/models/parameters/task.model';


@Component({
  selector: 'app-edition-task',
  templateUrl: './edition-task.component.html',
  styleUrls: ['./edition-task.component.css']
})
export class EditionTaskComponent implements OnInit {

  faAsterisk = faAsterisk;
 
  formulario: FormGroup = new FormGroup({});

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private service: TaskService,
    private route: ActivatedRoute,
    private toastService: ToastService
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.searchRecord();
  }

  createForm() {
    this.formulario = this.fb.group({
      id: ['', [Validators.required]],
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      creador: ['', [Validators.required]],
      estado: ['', [Validators.required]]
        });
  }

  searchRecord(){
    let id = parseInt(this.route.snapshot.params["id"]);
    this.service.searchRecord(id).subscribe(
      (data: TaskModel) => {
        this.formulario.controls["id"].setValue(data.id)
        this.formulario.controls["titulo"].setValue(data.titulo)
        this.formulario.controls["descripcion"].setValue(data.descripcion)
        this.formulario.controls["creador"].setValue(data.creador)
        this.formulario.controls["estado"].setValue(data.estado)
      },
      (err)=>{
        console.log("no existe la tarea");
        this.router.navigate(["/home"]);
      }
    );
  }

  createRecord(){
    let model = new TaskModel();
    model.titulo = this.formulario.controls['titulo'].value;
    if(this.formulario.controls['estado'].value == "true"){   
      model.estado = true;
    } else{
      model.estado = false;
    }
    model.descripcion = this.formulario.controls['descripcion'].value;
    model.creador = this.formulario.controls['creador'].value;
    model.id = this.formulario.controls['id'].value;

  
    this.service.editRecord(model).subscribe({
      next: (data: TaskModel) =>{
        const mensajeToast: ToastData = {
          type: 'success',
          message: GeneralData.TOAST_MESSAGE_EDIT('La tarea')
        }
        this.toastService.openToast(mensajeToast);
        this.router.navigate(["/parameters/list-task"]);
      },
      error: (err:any)=>{
        const mensajeToast: ToastData = {
          type: 'error',
          message: GeneralData.TOAST_ERROR_EDIT('La tarea')
        }
        this.toastService.openToast(mensajeToast);
      }
    });

  }

}
