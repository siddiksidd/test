import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchpipe'
})
export class SearchpipePipe implements PipeTransform {

  transform(value: any, filteredString: string) {
    if ( filteredString === '') {
      return value;
    }
    const employeesArray = [];
    for (const employee of value) {
      if (employee['employeeName'].includes(filteredString)) {
        employeesArray.push(employee);
      }
    }
    return employeesArray;
  }
}
