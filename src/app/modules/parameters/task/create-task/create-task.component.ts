import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import { TaskModel } from 'src/app/models/parameters/task.model';
import { TaskService } from 'src/app/services/parameters/task.service';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {

  formulario: FormGroup = new FormGroup({});
  faAsterisk = faAsterisk;
  
  constructor(
    private fb: FormBuilder,
    private router: Router,
    
    private service: TaskService
  ) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formulario = this.fb.group({
      titulo: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
      creador: ['', [Validators.required]]
    });
  }

  createRecord(){
    let model = new TaskModel();
    model.titulo = this.formulario.controls['titulo'].value;
    model.descripcion = this.formulario.controls['descripcion'].value;
    model.creador = this.formulario.controls['creador'].value;
    model.estado = false;

    this.service.saveRecord(model).subscribe({
      next: (data: TaskModel) => {  
        this.router.navigate(["/parameters/list-task"]);
      },
      error: (err:any)=>{
        
        
      }
    });
}
}
