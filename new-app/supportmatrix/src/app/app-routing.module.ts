import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HodloginComponent } from './hodlogin/hodlogin.component';


const routes: Routes = [
  {path : '' , title : 'Home', redirectTo : 'home', pathMatch : 'full'},
    {path : 'home', title : 'Home', component :HomeComponent},
    {path : 'contactus', title : 'ContactUs', component : ContactusComponent},
    {path : 'aboutus', title : 'AboutUs', component : AboutusComponent},
    {path : 'services', title : 'Services', component : ServicesComponent},
    {path : 'signup', title : 'SignUp', component : SignupComponent},
    {path : 'user-login', title : 'UserLogin', component : UserloginComponent},
    {path : 'admin-login', title : 'AdminLogin', component : AdminloginComponent},
    {path : 'hod-login', title : 'HodLogin', component : HodloginComponent},
    {path : '**', title : 'Home', redirectTo : '/home'}
    
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
