import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Employee } from '../../../models/employee.model';
import { EmployeeService } from '../../../services/employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.css'
})
export class EmployeeListComponent {
// employees: any;
  employees:Employee[] = [];
  constructor(private employeeService: EmployeeService) {}

  ngOnInit(): void{
    this.employeeService.getAllEmployee().subscribe({
      next: (employees) => {
        this.employees = employees;
    },
    error: (response) =>{
      console.log(response);
    }
    })
  }
  // employees:Employee[] = [];
  // ngOnInit(): void {
  //   // Initialize the employees array with some dummy data
  //   this.employees = [
  //     { id: 'E001', name: 'John Doe', email: 'john.doe@example.com', phone: 1234567890, salary: 50000, department: 'Engineering' },
  //     { id: 'E002', name: 'Jane Smith', email: 'jane.smith@example.com', phone: 2345678901, salary: 60000, department: 'Marketing' },
  //     { id: 'E003', name: 'Michael Johnson', email: 'michael.johnson@example.com', phone: 3456789012, salary: 55000, department: 'HR' },
  //   ];
  // }
  
}
