import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{

  signupForm! : FormGroup;
  submitted : boolean = false;

  constructor(private formBuilder:FormBuilder){}

    ngOnInit(){

      //validation
      this.signupForm = this.formBuilder.group({
        firstname : ['',[Validators.required]],
        lastname : ['',[Validators.required]],
        email : ['',[Validators.required,Validators.email]],
        mobilenumber : ['',[Validators.required,Validators.pattern("^[0-9]*$@"),Validators.minLength(10),Validators.maxLength(10)]],
        password : ['',[Validators.required,Validators.minLength(8)]]
      });
    }

    onReset() {
      this.submitted = false;
      this.signupForm.reset();
    }

    onSubmit(){
      this.submitted = true;
      if (this.signupForm.invalid)
      {
        return;
      }
      alert("success");
      }
  }
