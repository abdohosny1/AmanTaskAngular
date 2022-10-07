import { IDepartment } from './../shared/model/department';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http:HttpClient) { }


  getDepartmentById(id:number){
    return this.http.get(environment.BASE_URL+environment.DEPARTMENT+"/"+id);
  }

  RemoveDepartment(id:number){
    return this.http.delete(environment.BASE_URL+environment.DEPARTMENT+"/"+id);
  }

  AddDepartment(emp:IDepartment){
    return this.http.post(environment.BASE_URL+environment.DEPARTMENT,emp);
  }

  UpdateDepartment(id:number,emp:IDepartment){
    return this.http.put(environment.BASE_URL+environment.DEPARTMENT+"/"+id,emp);
  }

  getAllDepartment(){
    return this.http.get<IDepartment[]>(environment.BASE_URL+environment.DEPARTMENT);

  }
}
