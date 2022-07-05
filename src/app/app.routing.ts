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

const routes: Routes =[
    { path: 'landing',          component: LandingComponent },
    { path: 'home',             component: HomeComponent },
    { path: 'user-profile',     component: ProfileComponent },
    { path: 'register',         component: SignupComponent },
    { path: 'login',            component: LoginComponent },
    { path: 'about',            component: AboutUsComponent},
    { path: 'contact',          component: ContactComponent },
    { path: 'servicios',        component: ServiciosComponent},
    { path: 'news',             component: NewsComponent },
    { path: 'adminview',        component: AdminViewComponent},
    { path: 'users',            component: UsersComponent},
    { path: 'update',           component: UpdateUserComponent},
    { path: 'getnews',          component: GetNewsComponent},
    { path: 'detailnews/:id',       component: DetailsNewsComponent},
    { path: '', redirectTo: 'landing', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes,{
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
