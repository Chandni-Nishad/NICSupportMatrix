import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserFormComponent } from '../user-form/user-form.component';

@Component({
  selector: 'app-user-login',
  standalone: true,
  imports: [RouterLink,UserFormComponent],
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {

}
