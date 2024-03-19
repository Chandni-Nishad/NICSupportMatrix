import { Routes } from '@angular/router';
import { SignupformComponent } from './signupform/signupform.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HODLonginComponent } from './hodlongin/hodlongin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { AboutuspageComponent } from './aboutuspage/aboutuspage.component';


export const routes: Routes = [
    {path : 'home', title : 'Home', component :HomeComponent},
    {path : 'signup-form', title : 'Sign Up', component : SignupformComponent},
    {path : 'user-login', title : 'User Login', component : UserLoginComponent},
    {path : 'hod-login', title : 'HOD Login', component : HODLonginComponent},
    {path : 'admin-login', title : 'Admin Login', component : AdminLoginComponent},
    {path : 'contact-page', title : 'Contact Us', component : ContactpageComponent},
    {path : 'about-us', title : 'About Us', component : AboutuspageComponent}


];

