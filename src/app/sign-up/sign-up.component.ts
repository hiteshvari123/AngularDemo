import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm:FormGroup;


  constructor(  private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.signUpForm=this.fb.group({
      fullName:["",Validators.required],
      email:["",Validators.required],
      password:["",Validators.required],
      c_password:["",Validators.required]
    })
  }

  get f() {
    return this.signUpForm.controls;
  }

  onSubmit() {
    if(this.signUpForm.invalid){
      console.log("Inalid Form...");
      return;
    }
    else{
      console.log("Valid Form...",this.signUpForm.value);
      localStorage.setItem("userEmail",this.signUpForm.value.email);
      localStorage.setItem("userPassword",this.signUpForm.value.password);
      this.router.navigate(['/login']);
    }
  }
  signIn(){
    this.router.navigate(['/login']);
  }

}
