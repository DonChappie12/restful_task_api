import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mean';
  allTasks: any;
  oneTask: any;
  constructor(private _httpService: HttpService){
    // this.getAllTasks();
    // this.getOneTask('');
  }
  getAllTasks(){
    let x = this._httpService.getTasks()
    x.subscribe(data=>{this.allTasks = data;
    console.log(this.allTasks)})
  }
  getOneTask(id){
    let z = this._httpService.getOneTask(id)
    z.subscribe(data=>{
      this.oneTask = data;
      // console.log(this.oneTasks) chmodtriple7
    })
  }
  // onButtonClick(): void { 
  //   console.log(`Click event is working`);
  // }
  // onButtonClickParam(num: Number): void { 
  //   console.log(`Click event is working with num param: ${num}`);
  // }
  // onButtonClickParams(num: Number, str: String): void { 
  //   console.log(`Click event is working with num param: ${num} and str param: ${str}`);
  // }
  // onButtonClickEvent(event: any): void { 
  //   console.log(`Click event is working with event: ${event}`);
  // }
}