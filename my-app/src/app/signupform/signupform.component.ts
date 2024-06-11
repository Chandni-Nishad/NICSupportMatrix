import { Component } from '@angular/core';
import { UserLoginComponent } from '../user-login/user-login.component';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-signupform',
  standalone: true,
  imports: [UserLoginComponent,RouterLink],
  templateUrl: './signupform.component.html',
  styleUrl: './signupform.component.css'
})
export class SignupformComponent {

 

}
