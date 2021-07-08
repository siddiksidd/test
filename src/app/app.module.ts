import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppcolorDirective } from './Directives/appcolor.directive';

import { EmployeeComponent } from './employee1/employee.component';
import { Employee2Component } from './employee2/employee2.component';
import { SearchpipePipe } from './Pipes/searchpipe.pipe';
import { SortpipePipe } from './Pipes/sortpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    Employee2Component,
    SearchpipePipe,
    SortpipePipe,
    AppcolorDirective
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
