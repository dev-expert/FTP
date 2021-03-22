import { Component } from '@angular/core';
import {RandomuserService} from './services/randomuser.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-forms';
  data:Array<any>
  results:any
  totalrecords: any
  page:number=1
  constructor(private randomuser:RandomuserService){
    this.data=new Array<any>()
  }

  getuser(){// in this function get the data from the server and stored in the results
     this.randomuser.getdata().subscribe((data)=>{
       debugger;
       console.log(data)
       this.data=data.results
       console.log(this.results)
       this.totalrecords=data.results.length//calculate the length of the array to itreate
     })
  }
}
