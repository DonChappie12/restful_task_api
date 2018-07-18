import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // implements OnInit
  title = 'API';
  allTasks: any;
  oneTask: any;
  display: boolean = false || true;
  newTask: any;
  updateTask: any;
  displayForm: boolean = false;
  constructor(private _httpService: HttpService){
  }
    ngOnInit(){
      this.newTask = {title: "", description: ""}
    }
  getAllTasks(){
    this.display = !this.display;
    this._httpService.getTasks().subscribe(data=>{this.allTasks = data;
    console.log(this.allTasks)})
  }
  getOneTask(id){
    this._httpService.getOneTask(id).subscribe(data=>{
      this.oneTask = data;
      // console.log(this.oneTasks) chmodtriple7
    })
  }
  createTask(){
    this._httpService.createTask(this.newTask).subscribe(data=>{
      console.log(data);
      this.newTask={title: "", description: ""};
    })
  }
  deleteTask(id){
    console.log(id)
    this._httpService.deleteTask(id).subscribe(data=>{
      console.log("task is delete");
    })
    this.getAllTasks();
  }
  editTask(){
    this._httpService.editTask(this.updateTask).subscribe(data=>{
      console.log("You did it");
      this.updateTask = null;
    })
    this.displayForm = false;
    this.getAllTasks();
  }
  showEditForm(task){
    this.displayForm = true;
    this.updateTask = Object.assign({}, task);
  }
}