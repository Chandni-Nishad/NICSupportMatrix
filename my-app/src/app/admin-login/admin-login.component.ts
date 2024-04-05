import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AdminFormComponent } from '../admin-form/admin-form.component';


@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [RouterLink, AdminFormComponent],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

}
