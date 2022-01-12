import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { DeveolopmentComponent } from './deveolopment/deveolopment.component';
import { TestingComponent } from './testing/testing.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { GalaryComponent } from './galary/galary.component';
import { HomeComponent } from './home/home.component';
import { DevelopmentComponent } from './service/development/development.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    RegisterComponent,
    LoginComponent,
    SigninComponent,
    DeveolopmentComponent,
    TestingComponent,
    DeploymentComponent,
    GalaryComponent,
    HomeComponent,
    DevelopmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
