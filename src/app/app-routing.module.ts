import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeploymentComponent } from './deployment/deployment.component';
import { DeveolopmentComponent } from './deveolopment/deveolopment.component';
import { GalaryComponent } from './galary/galary.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DevelopmentComponent } from './service/development/development.component';
import { ServiceComponent } from './service/service.component';
import { SigninComponent } from './signin/signin.component';
import { TestingComponent } from './testing/testing.component';

const routes: Routes = [
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'service',
    component:ServiceComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'galary',
    component:GalaryComponent
  },
  {
    path:'service',
    children:[
      {
        path:'deveolopment',
        component:DeveolopmentComponent
      },
      {
        path:'development',
        component:DevelopmentComponent
      },
      {
        path:'testing',
        component:TestingComponent
      },
      {
        path:'deployment',
        component:DeploymentComponent
      }
    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
