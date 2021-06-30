import { Injectable } from '@angular/core';
import {Employeedetail} from './employee/employee.component';
import {DialogBoxComponent} from 'src/app/dialog-box/dialog-box.component';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  getEmployees(): Employeedetail[] {
    
    return[
      {
        code: 'emp101', name: 'Arnald', age:30, designation: 'Salesman',
        address:"Tamilnadu"
    },
    {
        code: 'emp102', name: 'Baba', age:30, designation: 'Accounter',
        address:"Tamilnadu"
    },
    {
        code: 'emp103', name: 'CaptainAmerica', age:30, designation: 'Manager',
        address:"Tamilnadu"
    },
    {
        code: 'emp104', name: 'Dora', age:30, designation: 'Owner',
        address:"Tamilnadu"
    },
    {
        code: 'emp105', name: 'Eli', age:30, designation: 'Hr',
        address:"Tamilnadu"
    },
    {
        code: 'emp106', name: 'Falcon', age:30, designation: 'salesman',
        address:"Tamilnadu"
    },
    {
      code: 'emp107', name: 'Gemini', age:30, designation: 'salesman',
      address:"Tamilnadu"
  },
  {
    code: 'emp108', name: 'Hulk', age:30, designation: 'salesman',
    address:"Tamilnadu"
},
{
  code: 'emp109', name: 'Ironnman', age:30, designation: 'salesman',
  address:"Tamilnadu"
},
{
  code: 'emp110', name: 'JackieChan', age:30, designation: 'salesman',
  address:"Tamilnadu"
},
    ];
  
  }
}
