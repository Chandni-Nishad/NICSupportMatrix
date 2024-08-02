import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hodlogin',
  templateUrl: './hodlogin.component.html',
  styleUrl: './hodlogin.component.css'
})
export class HodloginComponent {

  hodlogin : FormGroup;
  private predefinedId: 'RohitSingAswal' | undefined;
  private predefinedPassword: 'HOD@123456' | undefined;

  constructor(private formbuilder: FormBuilder) {
    this.hodlogin= this.formbuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }




  isFormValid(): boolean {
    const id = this.hodlogin.get('id')?.value;
    const password = this.hodlogin.get('password')?.value;
    return id === this.predefinedId && password === this.predefinedPassword;
  }

  onSubmit(): void {
    /*if (this.hodlogin.valid) {
      const loginData = this.hodlogin.value;
      console.log('Login data:', loginData);
      // You can add additional logic to handle the login here
      if (loginData.id === this.predefinedId && loginData.password === this.predefinedPassword) {
        console.log('Login successful!');
        // Perform further actions on successful login
      } else {
        console.log('Login failed!');
        // Handle login failure
      }
    }
  }*/
    if (this.hodlogin.valid && this.isFormValid()) {
      const loginData = this.hodlogin.value;
      console.log('Login successful!', loginData);
      // Perform further actions on successful login
    } else {
      console.log('Login failed. Invalid credentials!');
      // Handle login failure logic here
    }
  }
}
