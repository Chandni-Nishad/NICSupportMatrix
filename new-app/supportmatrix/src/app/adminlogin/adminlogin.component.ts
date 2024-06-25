import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrl: './adminlogin.component.css'
})
export class AdminloginComponent implements OnInit{
  
  adminlogin! : FormGroup;
  submitted : boolean = false;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit(){

    //validation
    this.adminlogin = this.formBuilder.group({
      //firstname : ['',[Validators.required]],
      //lastname : ['',[Validators.required]],
      email : ['',[Validators.required,Validators.email]],
     // mobilenumber : ['',[Validators.required,Validators.pattern("^[0-9]*$@"),Validators.minLength(10),Validators.maxLength(10)]],
      password : ['',[Validators.required,Validators.minLength(8)]]
    });
  }

}
