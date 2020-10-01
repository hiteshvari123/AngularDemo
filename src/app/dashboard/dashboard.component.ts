import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EmpDetailsComponent } from '../emp-details/emp-details.component';
import { AddEmpComponent } from '../add-emp/add-emp.component';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  employeeDetails=[
    {id:1,Name:"Shravan_Test",DOB:"01-June-1996",address:"Rankala Tower",Role:"Developer",Salary:"2.3/annum",exp:"2 years"},
    {id:2,Name:"ABC_Test",DOB:"30-Oct-1990",address:"Pune",Role:"Tester",Salary:"2.5/annum",exp:"1.5 years"},
    {id:3,Name:"Shreya_Test",DOB:"10-July-1994",address:"Baner, Pune",Role:"Anyalysis",Salary:"3/annum",exp:"3 years"},
    {id:4,Name:"Hiteshvari_Test",DOB:"26-Oct-1996",address:"Kave Nagar,Pune",Role:"Automation Tester",Salary:"4/annum",exp:"3.5 years"},
    {id:5,Name:"Ankita_Test",DOB:"15-Nov-1992",address:"Rankala Tower",Role:"Research",Salary:"2.5/annum",exp:"3 years"}
  ]
  constructor(private dialogRef:MatDialog) { }

  ngOnInit(): void {
    
  }
  
  viewEmpDetails(emp){
    console.log("In pop up")
    const dialogRef =  this.dialogRef.open(EmpDetailsComponent,{
      data: emp,
       height: '800px',
       width: '800px',
    });
    dialogRef.disableClose=true;
   dialogRef.afterClosed().subscribe((submit) => {
     console.log("Modal Closed........",submit)
   })
  }

  addEmp(){
    const dialogRef =  this.dialogRef.open(AddEmpComponent,{
      //data: emp,
       height: '800px',
       width: '800px',
    });
    dialogRef.disableClose=true;
   dialogRef.afterClosed().subscribe((submit) => {
     console.log("Modal Closed........",submit)
   })
  }

}
