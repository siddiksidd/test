import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Employee1Service {
  url:string = 'assets/employee1.json'; //local
  //url:string = ''; //network RESTful
  constructor(private httpClient:HttpClient) { }
  getallemployees(){
     return this.httpClient.get(this.url)
  }
}
