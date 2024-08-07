import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UpcomingprojectsComponent } from './upcomingprojects/upcomingprojects.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HodloginComponent } from './hodlogin/hodlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HttpClient, HttpClientJsonpModule, HttpClientModule   } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SliderComponent } from './slider/slider.component';
import { AdminformComponent } from './adminform/adminform.component';
import { HodformComponent } from './hodform/hodform.component';
import { UserformComponent } from './userform/userform.component';
import { MandateComponent } from './mandate/mandate.component';
import { WhoswhoComponent } from './whoswho/whoswho.component';
import { DirectoryComponent } from './directory/directory.component';
import { MyloginComponent } from './mylogin/mylogin.component';
import { ProjectinfoComponent } from './projectinfo/projectinfo.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';

export function HttpLoaderFactory(http: HttpClient) {
  
}


@NgModule({
  declarations: [
    AppComponent,
   HeaderComponent,
   NavbarComponent,
   HomeComponent,
   UpcomingprojectsComponent,
   ProjectsComponent,
   FooterComponent,
   ContactusComponent,
   ServicesComponent,
   SignupComponent,
   UserloginComponent,
   HodloginComponent,
   AdminloginComponent,
   SliderComponent,
   AdminformComponent,
   HodformComponent,
   UserformComponent,
   MandateComponent,
   WhoswhoComponent,
   DirectoryComponent,
   MyloginComponent,
   ProjectinfoComponent,
   ForgetpasswordComponent
   
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,HttpClientModule,
    AppRoutingModule,RouterOutlet,FormsModule, HttpClientJsonpModule,TranslateModule.forRoot({
      loader :{
        provide : TranslateLoader,
        useFactory : HttpLoaderFactory,
        deps : [HttpClient]
      }
    })
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
