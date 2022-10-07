import { IDepartment } from './../shared/model/department';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { IEmployee } from '../shared/model/employee';
import { EmployeesService } from './employees.service';
import { DepartmentService } from '../department/department.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {

  employee:Array<IEmployee>=[];
  allDepartment:Array<IDepartment>=[];
  nameDepartment:string="All";
  bsModelresf? :BsModalRef;

  constructor(
    private employeeService:EmployeesService,
    private departmentService:DepartmentService,
    private router:Router,
    private bsmodalService: BsModalService,
    ) { }

  ngOnInit(): void {
    this.getEmployee();
    this.getAllDepartment();
  }

  getEmployee(){
    this.employeeService.getEmployeee().subscribe(
       (response)=>{
         console.log(response);
         console.log("result");
         this.employee=response
       },
       (error)=>{
        console.log(error);
       }
    )
  }
  onDepartmentSelected(name:string){
   if(name ==="All"){
    this.getEmployee();
    this.nameDepartment="All"
   }else{
    this.employeeService.getEmployeeeBYDepartment(name).subscribe(
      (response)=>{
        console.log(response);
        console.log("result");
        this.employee=response;
        this.nameDepartment=name

      },
      (error)=>{
       console.log(error);
      }
   )
   }
  }

  getAllDepartment(){
    this.departmentService.getAllDepartment().subscribe(
      (response)=>{
      //  this.allDepartment=response;
        this.allDepartment=[{id:0,name:"All"},...response];
      },
      (error)=>{
        console.log(error);
      }
    )
  }

  onDetails(details:any){
    this.router.navigate(["/Datails",details.id]);

  }
  onDelete(deleteEmp:number){
    this.router.navigate(["/delete",deleteEmp]);

  }

  addEmployee(){
    this.bsModelresf=this.bsmodalService.show(AddEditEmployeeComponent);
    this.bsModelresf.content.onClose=(add:any)=>{
      if(add){
        this.getEmployee();
      }
    }
  }

  onEditEmployee(employee:any)
  {

    this.bsModelresf=this.bsmodalService.show(AddEditEmployeeComponent,{initialState:{employee}});
    this.bsModelresf.content.onClose=(update:any)=>{
      if(update){
        this.getEmployee();
      }
    }
  }

  onDeleteEmployee(id:number){

    let confirmDelete=confirm("Are you sure  Delete?")
    if(confirmDelete){
       this.employeeService.RemoveEmployeeById(id).subscribe(
         done=>{
          this.getEmployee()
          console.log("done");

         },
         error=>{console.log(error);}
       )


   }

}
}
