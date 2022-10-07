import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeesComponent } from './employees.component';
import { DeleteEmployeeComponent } from './delete-employee/delete-employee.component';
import { DetailsEmployeeComponent } from './details-employee/details-employee.component';
import { AddEditEmployeeComponent } from './add-edit-employee/add-edit-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';



@NgModule({
  declarations: [
    EmployeesComponent,
    DeleteEmployeeComponent,
    DetailsEmployeeComponent,
    AddEditEmployeeComponent,

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgbModalModule,
    NgbModule,
    FormsModule,

    ModalModule.forRoot(),







  ]
})
export class EmployessModule { }
