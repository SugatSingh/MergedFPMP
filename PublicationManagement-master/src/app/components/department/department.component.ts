import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departments: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.departments = this.apiService.getDepartments();
  }

}
