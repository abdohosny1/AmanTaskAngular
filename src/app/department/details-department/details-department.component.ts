import { DepartmentService } from './../department.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-department',
  templateUrl: './details-department.component.html',
  styleUrls: ['./details-department.component.scss']
})
export class DetailsDepartmentComponent implements OnInit {

  Id: any;

  oneDepartment:any;
  errorMassage: any;
  constructor(private activeRout: ActivatedRoute, private router: Router,
    private item:DepartmentService) { }


  ngOnInit(): void {
    this.activeRout.paramMap.subscribe((params) => {
      this.Id = params.get('id');
    });

    this.item.getDepartmentById(this.Id).subscribe(
      (data) => {
        this.oneDepartment = data;
      },
      (error) => {
        this.errorMassage = error;
      }
    );
  }

  BackToDepartment(){
    this.router.navigate(["/department"]);

  }


}
