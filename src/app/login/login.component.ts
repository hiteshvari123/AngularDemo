import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm:FormGroup;
  userEmail:any;
  userPassoward:any;

  constructor(
    private fb:FormBuilder,
    private router:Router
  ) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:["",Validators.required],
      password:["",Validators.required]
    })
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    if(this.loginForm.invalid){
      console.log("Inalid Form...");
      return;
    }
    else{
      console.log("Valid Form...");
      this.userEmail=localStorage.getItem("userEmail");
      this.userPassoward=localStorage.getItem("userPassword");
      if(this.userEmail==null){
        alert("Create Your Account")
      }
      else{
        if(this.userEmail==this.loginForm.value.email && this.userPassoward==this.loginForm.value.password){
          this.router.navigate(['/dashboard']);
        }
        else{
          alert("Username or Password is incorrect");
        }
      }
    }
  }

  signUp(){
    this.router.navigate(['/sign-up']);
  }

}
