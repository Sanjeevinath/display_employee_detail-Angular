import { Component, OnInit } from '@angular/core';
import {Employeedetail} from 'src/app/employee/employee.component';
import { DataService } from '../data.service';
import {DialogBoxComponent} from 'src/app/dialog-box/dialog-box.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css'],
  providers: [DataService]
})
export class EmployeelistComponent implements OnInit {
  employees: Employeedetail[] =[];
  constructor(private _dataservice: DataService,
    public dialog: MatDialog) { 
    this.employees=this._dataservice.getEmployees();

  }

  ngOnInit(): void {
  }
 
remove(){
  
  for(var i=0 ; i<this.employees.length-1 ; i++){
    var delBtn = confirm(" Do you want to delete this row?");
  if ( delBtn == true ) {
    this.employees.splice(i,1);
  }   
 }
}


 addRow(){
  const dialogRef = this.dialog.open(DialogBoxComponent);

  dialogRef.afterClosed().subscribe(result => {
    this.employees.push(result)
  });
}


 }

