import { EmployeesService } from './../employees.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.scss']
})
export class DeleteEmployeeComponent implements OnInit {
  Id: any=0;

  oneEmployee:any;
  errorMassage: any;
  constructor(private activeRout: ActivatedRoute, private router: Router,private serviceEmployee:EmployeesService) { }


  ngOnInit(): void {
    this.activeRout.paramMap.subscribe((params) => {
      this.Id = params.get('id');
    });

    this.serviceEmployee.getEmployeeById(this.Id).subscribe(
      (data) => {
        this.oneEmployee = data;
      },
      (error) => {
        this.errorMassage = error;
      }
    );
  }

  onDeleteEmployee(id:number){
      this.serviceEmployee.RemoveEmployeeById(id).subscribe(
        (done)=>{
          console.log("done");
          this.router.navigate(["/employee"]);
        },
        error=>{
          console.log(error);
        }
      )
  }

  BackToEmployee(){
    this.router.navigate(["/employee"]);
  }
}
