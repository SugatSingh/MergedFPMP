import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashusers',
  templateUrl: './dashusers.component.html',
  styleUrls: ['./dashusers.component.css']
})
export class DashusersComponent implements OnInit {
  departments: string[];
  constructor() {
    this.departments = ["DOECE","DOAE","DOME","DOCE"];
   }

  ngOnInit() {
  }

  onSubmituser(val){
    const user = val.value;
    console.log(user);
  }

}
