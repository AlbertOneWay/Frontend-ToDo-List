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

    saveRecord(data: TaskModel): Observable<TaskModel>{
      const httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })}
  
      return this.http.post<TaskModel>(`${this.url}/tareas`,{
        titulo: data.titulo,
        descripcion: data.descripcion,
        creador: data.creador,
        estado: data.estado
      },httpOptions);
    }
  
    searchRecord(id: number): Observable<TaskModel>{
      const httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json' 
      })}
  
      return this.http.get<TaskModel>(`${this.url}/tareas/${id}`,httpOptions)
    }
  
    editRecord(data: TaskModel): Observable<TaskModel>{
      const httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })}
  
      return this.http.put<TaskModel>(`${this.url}/tareas/${data.id}`,{
        id: data.id,
        titulo: data.titulo,
        descripcion: data.descripcion,
        creador: data.creador,
        estado: data.estado
      },httpOptions);
    }

    editRecordforID(id: number): Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })}
  
      return this.http.put<TaskModel>(`${this.url}/tareas/${id}`,{
        id: id,
        estado: false
      },httpOptions);
    }
  
    deleteRecord(id: number): Observable<any>{
      const httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })}
  
      return this.http.delete(`${this.url}/tareas/${id}`,httpOptions);
    }
}
