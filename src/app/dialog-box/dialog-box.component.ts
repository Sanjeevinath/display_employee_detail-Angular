import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { DataService } from '../data.service';

import {Employeedetail} from 'src/app/employee/employee.component';
import { Employee } from '../employeeModel';


@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent implements OnInit {
  employees: Employee= new Employee();
  
  constructor(public dialog: MatDialogRef<DialogBoxComponent>){

  }

  ngOnInit(): void {
  }
  add(){
this.dialog.close(this.employees);
  }
}
