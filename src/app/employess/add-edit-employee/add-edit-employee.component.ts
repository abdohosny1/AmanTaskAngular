import { DepartmentService } from './../../department/department.service';
import { IDepartment } from './../../shared/model/department';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { IEmployee } from 'src/app/shared/model/employee';
import { EmployeesService } from '../employees.service';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-edit-employee',
  templateUrl: './add-edit-employee.component.html',
  styleUrls: ['./add-edit-employee.component.scss']
})
export class AddEditEmployeeComponent implements OnInit {

  employee:any={
    id:0,
    name:"",
    address:"",
    departmentId:0,

  };

  onClose:any;
  department:Array<IDepartment>=[];
  selectedVlue:any;
  submitted = false;
  constructor(
    public  bsModel: BsModalRef,
    private service:EmployeesService,
    private fb:FormBuilder,
    private departmentServices:DepartmentService

  ) { }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
     if(this.employee.id==0){
      this.service.AddEmployee(this.employee).subscribe(
        taskAdd=>{
          console.log("done add"+taskAdd);
          this.onClose(taskAdd);
          this.bsModel.hide();
        },
        error=>{console.log(error);}
      );
     }else{
      this.service.UpdateEmployeeById(this.employee.id,this.employee).subscribe(
        taskupdare=>{
          console.log("id"+this.employee.id);
          console.log("emp"+this.employee);

          console.log(taskupdare);
          this.onClose(taskupdare);
          this.bsModel.hide();
        },
        error=>{console.log(error);}
      );
     }
    }
  }
  registerForm = this.fb.group({
    // id:['',[Validators.required]],
    name: ['',[Validators.required]],
    address: ['',[Validators.required]],
    departmentId: ['',[Validators.required]],

  },);

  get name(){
    return this.registerForm.get('name');
  }
  get address(){
    return this.registerForm.get('address');
  }
  get departmentId(){
    return this.registerForm.get('departmentId');
  }
  ngOnInit(): void {
    this.getAllDepartment();
  }

  changeDepartment(e:any){
    console.log(e.target.value);
    this.selectedVlue=e.target.value;
    this.departmentId?.setValue(e.target.value, {
      onlySelf: true,
    });
    let idx = e.target.value;
    if (idx == 0) {
      this.registerForm.controls['departmentId'].setValidators([
        Validators.required,
      ]);
  }
  }
  getAllDepartment(){
    this.departmentServices.getAllDepartment().subscribe(
      (response)=>{
        console.log( "department"+response);
      this.department=response
      },
      (error)=>{
        console.log(error);
      }
    )
  }




}
function ForBiddenName(arg0: RegExp): any {
  throw new Error('Function not implemented.');
}

