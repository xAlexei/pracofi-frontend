import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { ProfileComponent } from './profile/profile.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { AuthService } from './services/auth.service';


import { HomeModule } from './home/home.module';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NewsComponent } from './news/news.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { NavbarAdminComponent } from './navbar-admin/navbar-admin.component';
import { UsersComponent } from './users/users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { GetNewsComponent } from './get-news/get-news.component';
import { DetailsNewsComponent } from './details-news/details-news.component';
import { DetailsJobsComponent } from './details-jobs/details-jobs.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { BolsaComponent } from './bolsa/bolsa.component';

import { AuthGuard } from './auth.guard';
import { HttpInterceptor } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LandingComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    AboutUsComponent,
    ContactComponent,
    ServiciosComponent,
    NewsComponent,
    AdminViewComponent,
    NavbarAdminComponent,
    UsersComponent,
    UpdateUserComponent,
    GetNewsComponent,
    DetailsNewsComponent,
    DetailsJobsComponent,
    VacancyComponent,
    BolsaComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatCardModule
    
  ],
  entryComponents: [
    UpdateUserComponent
  ],

  providers: [AuthService, AuthGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
