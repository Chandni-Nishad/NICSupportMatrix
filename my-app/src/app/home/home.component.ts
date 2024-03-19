import { Component } from '@angular/core';
import { SignupformComponent } from '../signupform/signupform.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SignupformComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
