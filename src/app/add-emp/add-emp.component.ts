import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-emp',
  templateUrl: './add-emp.component.html',
  styleUrls: ['./add-emp.component.scss']
})
export class AddEmpComponent implements OnInit {

  empForm:FormGroup;

  constructor(private dialogRef:MatDialog,
    @Inject(MAT_DIALOG_DATA) private data:any, private fb:FormBuilder) { }

  ngOnInit(): void {
    this.empForm=this.fb.group({
      fullName:["",Validators.required],
      address:["",Validators.required],
      dob:["",Validators.required],
      role:["",Validators.required],
      salary:["",Validators.required],
      experience:["",Validators.required],
    })
  }

  get f() {
    return this.empForm.controls;
  }

  onSubmit() {
    if(this.empForm.invalid){
      console.log("Inalid Form...");
      return;
    }
    else{
      alert("Form fill up successfully")
      this.onCancel();
    }
  }

  onCancel() {
    this.dialogRef.closeAll();
  }

}
