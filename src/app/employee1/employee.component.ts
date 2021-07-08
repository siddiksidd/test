import { Component, OnInit } from '@angular/core';
import { Employee1Service } from '../services/employee1.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent  {
  filteredString:string=''; 
  sortby:any='1'
  employees:any;
  errMsg:any;
  constructor(proService:Employee1Service){
    proService.getallemployees().subscribe(
      result => this.employees = result,
      error => this.errMsg = error
    )
}
  

}
