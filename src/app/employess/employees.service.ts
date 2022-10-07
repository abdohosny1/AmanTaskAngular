import { IDepartment } from './../shared/model/department';
import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { IEmployee } from '../shared/model/employee';


@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }

  getEmployeee(){
   return this.http.get<IEmployee[]>(environment.BASE_URL+environment.EMPLOYEE);
  }
  getEmployeeeBYDepartment( name:string){
    return this.http.get<IEmployee[]>(environment.BASE_URL+environment.EMPLOYEE+"/name?name="+name);
   }
  getEmployeeById(id:number){
    return this.http.get(environment.BASE_URL+environment.EMPLOYEE+"/"+id);
  }

  RemoveEmployeeById(id:number){
    return this.http.delete(environment.BASE_URL+environment.EMPLOYEE+"/"+id);
  }

  AddEmployee(emp:IEmployee){
    return this.http.post(environment.BASE_URL+environment.EMPLOYEE,emp);
  }

  UpdateEmployeeById(id:number,emp:IEmployee){
    return this.http.put(environment.BASE_URL+environment.EMPLOYEE+"/"+id,emp);
  }






}
