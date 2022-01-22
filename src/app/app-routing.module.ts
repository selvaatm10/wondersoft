import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeploymentComponent } from './deployment/deployment.component';
import { DeveolopmentComponent } from './deveolopment/deveolopment.component';
import { FruitsComponent } from './fruits/fruits.component';
import { GalaryComponent } from './galary/galary.component';
import { HomeComponent } from './home/home.component';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
// import { S1Component } from './s1/s1.component';
import { DevelopmentComponent } from './service/development/development.component';
import { ServiceComponent } from './service/service.component';
// import { SigninComponent } from './signin/signin.component';
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
    path: 'app-lifecyclehooks',
    component:LifecyclehooksComponent
  },
  // {
  //   path:'app-s1',
  //   component: S1Component
  // },
  // {
  //   path:'app-s2'
  //   component: S2Component
  // },
  {
    path:'register',
    component:RegisterComponent
  },
  // {
  //   path:'signin',
  //   component:SigninComponent
  // },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'galary',
    component:GalaryComponent
  },
  {
    path:'fruits',
    component:FruitsComponent
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
  },
  {
    path:'app-loan-calculator',
    component:LoanCalculatorComponent
  }
  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
