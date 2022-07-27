import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { SignupComponent } from './signup/signup.component';
import { LandingComponent } from './landing/landing.component';
import { LoginComponent } from './login/login.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactComponent } from './contact/contact.component';
import { NewsComponent } from './news/news.component';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { UsersComponent } from './users/users.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { GetNewsComponent } from './get-news/get-news.component';
import { DetailsNewsComponent } from './details-news/details-news.component';
import { DetailsJobsComponent } from './details-jobs/details-jobs.component';
import { VacancyComponent } from './vacancy/vacancy.component';
import { DetailsComponent } from './details/details.component';
import { BolsaComponent } from './bolsa/bolsa.component';

import { AuthGuard } from './auth.guard';

const routes: Routes =[
    { path: 'landing',          component: LandingComponent },
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',         component: SignupComponent, canActivate: [AuthGuard] },
    { path: 'login',            component: LoginComponent },
    { path: 'about',            component: AboutUsComponent},
    { path: 'contact',          component: ContactComponent },
    { path: 'servicios',        component: ServiciosComponent},
    { path: 'news',             component: NewsComponent, canActivate: [AuthGuard] },
    { path: 'adminview',        component: AdminViewComponent, canActivate: [AuthGuard]},
    { path: 'users',            component: UsersComponent, canActivate: [AuthGuard]},
    { path: 'update',           component: UpdateUserComponent, canActivate: [AuthGuard]},
    { path: 'getnews',          component: GetNewsComponent},
    { path: 'detailnews/:id',   component: DetailsNewsComponent},
    { path: 'detailjobs',       component: DetailsJobsComponent},
    { path: 'vacancy',          component: VacancyComponent},
    { path: 'nuevo',        component: DetailsComponent},
    { path: 'bolsa', component: BolsaComponent},
    { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
