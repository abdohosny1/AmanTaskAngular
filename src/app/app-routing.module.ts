import { DeleteDepartmentComponent } from './department/delete-department/delete-department.component';
import { DetailsDepartmentComponent } from './department/details-department/details-department.component';
import { DepartmentComponent } from './department/department.component';
import { DeleteEmployeeComponent } from './employess/delete-employee/delete-employee.component';
import { DetailsEmployeeComponent } from './employess/details-employee/details-employee.component';
import { EmployessModule } from './employess/employess.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './employess/employees.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

const routes: Routes = [
  {path:"",component:EmployeesComponent},
  {path:"employee",component:EmployeesComponent},
  {path:"department",component:DepartmentComponent},
  {path:"Datails/:id",component:DetailsEmployeeComponent},
  {path:"DatailsDepartment/:id",component:DetailsDepartmentComponent},

  {path:"delete/:id",component:DeleteEmployeeComponent},
  {path:"deletedepartment/:id",component:DeleteDepartmentComponent},




  //{path:"employee",loadChildren:()=>import('./employess/employess.module').then(mod=>mod.EmployessModule),},

  {path:"not-found",component:NotFoundComponent, },

  {path:"**",redirectTo:"not-found",pathMatch:"full"}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
