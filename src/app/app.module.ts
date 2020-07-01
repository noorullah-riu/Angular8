import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee/employee.component';
import { EditEmployeeComponent } from './Employee/edit-employee/edit-employee.component';
import { DepartmentComponent } from './department/department.component';
import { EditDepartmentComponent } from './Department/edit-department/edit-department.component';
import { GetDepartmentComponent } from './Department/get-department/get-department.component';
import { GetEmployeeComponent } from './Employee/get-employee/get-employee.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    EditEmployeeComponent,
    DepartmentComponent,
    EditDepartmentComponent,
    GetDepartmentComponent,
    GetEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
