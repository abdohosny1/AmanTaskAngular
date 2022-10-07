import { AddEditDepartmentComponent } from './add-edit-department/add-edit-department.component';
import { DepartmentService } from './department.service';
import { IDepartment } from './../shared/model/department';
import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  department:Array<IDepartment>=[];
  bsModelresf? :BsModalRef;

  constructor(
    private departmentService:DepartmentService,
    private router:Router,
    private bsmodalService: BsModalService,
    ) { }
  ngOnInit(): void {
    this.getAllDepartment()
  }
  getAllDepartment(){
    this.departmentService.getAllDepartment().subscribe(
       (response)=>{
         console.log(response);
         console.log("result");
         this.department=response
       },
       (error)=>{
        console.log(error);
       }
    )
  }


  onDetails(details:any){
    this.router.navigate(["/DatailsDepartment",details.id]);

  }
  onDelete(deleteEmp:number){
    this.router.navigate(["/deletedepartment",deleteEmp]);

  }

  addDepartment(){
    this.bsModelresf=this.bsmodalService.show(AddEditDepartmentComponent);
    this.bsModelresf.content.onClose=(add:any)=>{
      if(add){
        this.getAllDepartment();
      }
    }
  }

  onEditEmployee(department:any)
  {

    this.bsModelresf=this.bsmodalService.show(AddEditDepartmentComponent,{initialState:{department}});
    this.bsModelresf.content.onClose=(update:any)=>{
      if(update){
        this.getAllDepartment();
      }
    }
  }

  onDeleteDepartment(id:number){

    let confirmDelete=confirm("Are you sure  Delete?")
    if(confirmDelete){
       this.departmentService.RemoveDepartment(id).subscribe(
         done=>{
          this.getAllDepartment()
          console.log("done");

         },
         error=>{console.log(error);}
       )


   }

}
}
