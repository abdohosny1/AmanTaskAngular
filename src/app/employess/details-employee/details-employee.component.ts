import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-details-employee',
  templateUrl: './details-employee.component.html',
  styleUrls: ['./details-employee.component.scss']
})
export class DetailsEmployeeComponent implements OnInit {

  Id: any;

  oneEmployee:any;
  errorMassage: any;
  constructor(private activeRout: ActivatedRoute, private router: Router,private item:EmployeesService) { }


  ngOnInit(): void {
    this.activeRout.paramMap.subscribe((params) => {
      this.Id = params.get('id');
    });

    this.item.getEmployeeById(this.Id).subscribe(
      (data) => {
        this.oneEmployee = data;
      },
      (error) => {
        this.errorMassage = error;
      }
    );
  }

  BackToEmployee(){
    this.router.navigate(["/employee"]);

  }


}
