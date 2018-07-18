import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(private _http: HttpClient) {
      // this.getTasks();
      // this.getOneTask();
  }
  getTasks(){
    return this._http.get('/api/tasks');
  }
  getOneTask(id){
    return this._http.get('/api/tasks/'+id);
  }
  createTask(task){
    return this._http.post('/api/tasks', task);
  }
  deleteTask(id){
    return this._http.delete('/api/tasks/'+id);
  }
  editTask(task){
    return this._http.patch('/api/tasks/'+task._id, task);
  }
}