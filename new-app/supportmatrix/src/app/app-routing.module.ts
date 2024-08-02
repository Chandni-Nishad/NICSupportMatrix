import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HodloginComponent } from './hodlogin/hodlogin.component';
import { AdminformComponent } from './adminform/adminform.component';
import { HodformComponent } from './hodform/hodform.component';
import { UserformComponent } from './userform/userform.component';
import { MandateComponent } from './mandate/mandate.component';
import { WhoswhoComponent } from './whoswho/whoswho.component';
import { DirectoryComponent } from './directory/directory.component';
import { ProjectinfoComponent } from './projectinfo/projectinfo.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';


const routes: Routes = [
  {path : '' , title : 'Home', redirectTo : 'home', pathMatch : 'full'},
    {path : 'home', title : 'Home', component :HomeComponent},
    {path : 'contactus', title : 'ContactUs', component : ContactusComponent},
    {path : 'services', title : 'Services', component : ServicesComponent},
    {path : 'signup', title : 'SignUp', component : SignupComponent},
    {path : 'user-login', title : 'UserLogin', component : UserloginComponent},
    {path : 'admin-login', title : 'AdminLogin', component : AdminloginComponent},
    {path : 'hod-login', title : 'HodLogin', component : HodloginComponent},
    {path : 'admin-form', title : 'AdminForm', component : AdminformComponent},
    {path : 'hod-form', title : 'HodForm', component : HodformComponent},
    {path : 'user-form', title : 'UserForm', component : UserformComponent},
    {path : 'mandate', title : 'Mandate', component : MandateComponent},
    {path : 'whoswho',title : 'Whos-Who', component : WhoswhoComponent},
    {path : 'directory', title : 'DirectorySearch', component : DirectoryComponent},
    {path : 'projectInfo', title : 'ProjectDetail', component : ProjectinfoComponent},
    {path : 'forgetPassword', title : 'RecoverPassword', component : ForgetpasswordComponent},
    {path : '**', title : 'Home', redirectTo : '/home'}
    
    

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
