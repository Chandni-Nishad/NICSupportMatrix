import { Component } from '@angular/core';
import { SignupformComponent } from '../signupform/signupform.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HODLonginComponent } from '../hodlongin/hodlongin.component';
import { UserLoginComponent } from '../user-login/user-login.component';
import { AdminLoginComponent } from '../admin-login/admin-login.component';
import { HomeComponent } from '../home/home.component';
import { ContactpageComponent } from '../contactpage/contactpage.component';
import { AboutuspageComponent } from '../aboutuspage/aboutuspage.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SignupformComponent,HODLonginComponent, UserLoginComponent, AdminLoginComponent, RouterLinkActive, RouterLink, HomeComponent, ContactpageComponent,AboutuspageComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}

