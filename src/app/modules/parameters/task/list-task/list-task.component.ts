import { Component, OnInit } from '@angular/core';
import { TaskModel } from 'src/app/models/parameters/task.model';
import { TaskService } from 'src/app/services/parameters/task.service';
import { faPlus,faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
  faPlus = faPlus;
  faEdit = faEdit;
  faTrash = faTrash;

  constructor(
    private service: TaskService
  ) { } 

  recordList: TaskModel[] = [];
  ngOnInit(): void {
    this.GetRecordList();
  }

  GetRecordList(){
    this.service.GetRecordList().subscribe({
      next:(data: TaskModel[]) =>{
        this.recordList = data;
      }
    })
  }
}
