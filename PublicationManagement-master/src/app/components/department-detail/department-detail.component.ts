import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.css']
})
export class DepartmentDetailComponent implements OnInit {

  constructor() {
    let title = 'Browser market shares at a specific website, 2014';
    let type = 'PieChart';
    let data = [
       ['Firefox', 45.0],
       ['IE', 26.8],
       ['Chrome', 12.8],
       ['Safari', 8.5],
       ['Opera', 6.2],
       ['Others', 0.7] 
    ];
    let columnNames = ['Browser', 'Percentage'];
    let options = {    
    };
    let width = 550;
    let height = 400;
   }

  ngOnInit() {
  }

}
