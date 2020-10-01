import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-emp-details',
  templateUrl: './emp-details.component.html',
  styleUrls: ['./emp-details.component.scss'] 
})
export class EmpDetailsComponent implements OnInit {

  empDetails:any;

  constructor(private dialogRef:MatDialog,
          @Inject(MAT_DIALOG_DATA) private data:any) { 

            console.log("Emp Details on Pop up",this.data)
          }

  ngOnInit(): void {
    this.empDetails=this.data;
  }

  onCancel() {
    this.dialogRef.closeAll();
  }

}
