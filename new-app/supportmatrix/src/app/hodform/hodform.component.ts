import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonServiceService } from '../common-service.service';

@Component({
  selector: 'app-hodform',
  templateUrl: './hodform.component.html',
  styleUrl: './hodform.component.css'
})
export class HodformComponent {

  hodForm! : FormGroup;
  submitted : boolean = false;

  constructor(private formBuilder:FormBuilder, private common:CommonServiceService){}

    ngOnInit():void{
      this.common.getData().subscribe(data=>{
        console.log(data);
      })
      //validation
      this.hodForm = this.formBuilder.group({
        projectname : ['',[Validators.required]],
        hodname : ['',[Validators.required]],
        contactnumber : ['',[Validators.required]],
        hodemail : ['',[Validators.required]]
       
      });
    }

    onReset():void {
      this.submitted = false;
      this.hodForm.reset();
    }

    onSubmit():void{
      //console.log(this.signupForm.value);
      this.submitted = true;
      this.common.SignUp(this.hodForm.value).subscribe((data:any)=>{
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
