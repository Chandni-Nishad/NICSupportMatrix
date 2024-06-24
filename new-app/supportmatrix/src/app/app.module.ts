import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RouterOutlet } from '@angular/router';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { UpcomingprojectsComponent } from './upcomingprojects/upcomingprojects.component';
import { ProjectsComponent } from './projects/projects.component';
import { FooterComponent } from './footer/footer.component';
import { ContactusComponent } from './contactus/contactus.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServicesComponent } from './services/services.component';
import { SignupComponent } from './signup/signup.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { HodloginComponent } from './hodlogin/hodlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { SliderComponent } from './slider/slider.component';

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
   AboutusComponent,
   ServicesComponent,
   SignupComponent,
   UserloginComponent,
   HodloginComponent,
   AdminloginComponent,
   SliderComponent
   
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule,RouterOutlet,FormsModule, HttpClientModule,TranslateModule.forRoot({
      loader :{
        provide : TranslateLoader,
        useFactory : HttpLoaderFactory,
        deps : [HttpClient]
      }
    })
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
