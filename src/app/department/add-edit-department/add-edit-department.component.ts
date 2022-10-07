import { DepartmentService } from './../department.service';
import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-department',
  templateUrl: './add-edit-department.component.html',
  styleUrls: ['./add-edit-department.component.scss']
})
export class AddEditDepartmentComponent implements OnInit {

  department:any={
    id:0,
    name:"",


  };

  onClose:any;
  submitted = false;
  selectedVlue:any;

  constructor(
    public  bsModel: BsModalRef,
    private fb:FormBuilder,
    private departmentServices:DepartmentService

  ) { }

  registerForm = this.fb.group({
    name: ['',[Validators.required]],


  },);

  get name(){
    return this.registerForm.get('name');
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
     if(this.department.id==0){
      this.departmentServices.AddDepartment(this.department).subscribe(
        taskAdd=>{
          console.log("done add"+taskAdd);
          this.onClose(taskAdd);
          this.bsModel.hide();
        },
        error=>{console.log(error);}
      );
     }else{
      this.departmentServices.UpdateDepartment(this.department.id,this.department).subscribe(
        taskupdare=>{
          console.log("id"+this.department.id);
          console.log("emp"+this.department);

          console.log(taskupdare);
          this.onClose(taskupdare);
          this.bsModel.hide();
        },
        error=>{console.log(error);}
      );

     }
    }
  }

  // onAddEmployee(){

  //   // let confirmAdd=confirm("Add Employee?");
  //   // if(confirmAdd){
  //     this.departmentServices.AddDepartment(this.department).subscribe(
  //       taskAdd=>{
  //         console.log("done add"+taskAdd);
  //         this.onClose(taskAdd);
  //         this.bsModel.hide();
  //       },
  //       error=>{console.log(error);}
  //     );
  //   // }

  // }
  // onEditEmployee(){

  //   // let confirmAdd=confirm("Edit Employee?");
  //   // if(confirmAdd){
  //     this.departmentServices.UpdateDepartment(this.department.id,this.department).subscribe(
  //       taskupdare=>{
  //         console.log("id"+this.department.id);
  //         console.log("emp"+this.department);

  //         console.log(taskupdare);
  //         this.onClose(taskupdare);
  //         this.bsModel.hide();
  //       },
  //       error=>{console.log(error);}
  //     );
  //   }
  // }
}
function ForBiddenName(arg0: RegExp): any {
  throw new Error('Function not implemented.');
}


