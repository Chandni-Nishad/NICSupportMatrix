import { Routes } from '@angular/router';
import { SignupformComponent } from './signupform/signupform.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HODLonginComponent } from './hodlongin/hodlongin.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { ContactpageComponent } from './contactpage/contactpage.component';
import { AboutuspageComponent } from './aboutuspage/aboutuspage.component';
import { ServicespageComponent } from './servicespage/servicespage.component';
import { UserFormComponent } from './user-form/user-form.component';
import { HODFormComponent } from './hodform/hodform.component';
import { AdminFormComponent } from './admin-form/admin-form.component';


export const routes: Routes = [
    {path : 'home', title : 'Home', component :HomeComponent},
    {path : 'signup-form', title : 'Sign Up', component : SignupformComponent},
    {path : 'user-login', title : 'User Login', component : UserLoginComponent},
    {path : 'hod-login', title : 'HOD Login', component : HODLonginComponent},
    {path : 'admin-login', title : 'Admin Login', component : AdminLoginComponent},
    {path : 'contact-page', title : 'Contact Us', component : ContactpageComponent},
    {path : 'about-us', title : 'About Us', component : AboutuspageComponent},
    {path : "services", title : 'Services', component : ServicespageComponent},
    {path : 'user-form', title : 'User Form', component : UserFormComponent},
    {path : 'hod-form', title : 'HOD Form', component : HODFormComponent},
    {path : 'admin-form', title : 'Admin Form', component : AdminFormComponent}


];

