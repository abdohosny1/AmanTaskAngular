import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartmentComponent } from './department.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap/modal';
import { DetailsDepartmentComponent } from './details-department/details-department.component';
import { AddEditDepartmentComponent } from './add-edit-department/add-edit-department.component';
import { DeleteDepartmentComponent } from './delete-department/delete-department.component';



@NgModule({
  declarations: [
    DepartmentComponent,
    DetailsDepartmentComponent,
    AddEditDepartmentComponent,
    DeleteDepartmentComponent
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
export class DepartmentModule { }
