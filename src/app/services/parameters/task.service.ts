import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralData } from 'src/app/config/general-data';
import { TaskModel } from 'src/app/models/parameters/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  url: string = GeneralData.BUSSINESS_URL;
  constructor(
    private http: HttpClient
    ) { }

    GetRecordList(): Observable<TaskModel[]>{
      return this.http.get<TaskModel[]>(`${this.url}/tareas`);
    }

}
