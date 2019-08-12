import { Component, OnInit } from '@angular/core';


// import shared
import { EmployeeService } from '../../shared/employee.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private service: EmployeeService) { }


  // creating static array for department variable
  department = [
    { id: 4, value: 'Test' },
    { id: 3, value: 'Dep 1' },
    { id: 2, value: 'Dep 2' },
    { id: 1, value: 'Dep 3' }

  ];

  ngOnInit() {
  }

}
