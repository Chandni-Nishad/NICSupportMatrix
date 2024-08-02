import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from '../common-service.service';



@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent{

  

  signupForm! : FormGroup;
  submitted : boolean = false;

  constructor(private formBuilder:FormBuilder, private common:CommonServiceService){}

    ngOnInit():void{
      this.common.getData().subscribe(data=>{
        console.log(data);
      })
      //validation
      this.signupForm = this.formBuilder.group({
        firstname : ['',[Validators.required]],
        lastname : ['',[Validators.required]],
        email : ['',[Validators.required,Validators.email]],
        mobilenumber : ['',[Validators.required,Validators.pattern("^[0-9]{10}$"),Validators.minLength(10),Validators.maxLength(10)]],
        password : ['',[Validators.required,Validators.minLength(8)]]
      });
    }

    onReset():void {
      this.submitted = false;
      this.signupForm.reset();
    }

    onSubmit():void{
      //console.log(this.signupForm.value);
      this.submitted = true;
      this.common.SignUp(this.signupForm.value).subscribe((data:any)=>{
        console.log(data.success);
        // if(data){

        // }
      });
      // if (this.signupForm.invalid5)
      // {
      //   return;
      // }
      // alert("success");
      // }
      // get f() {return this.signupForm.controls;}
  }
}

