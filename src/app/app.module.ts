import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceComponent } from './service/service.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
// import { SigninComponent } from './signin/signin.component';
import { DeveolopmentComponent } from './deveolopment/deveolopment.component';
import { TestingComponent } from './testing/testing.component';
import { DeploymentComponent } from './deployment/deployment.component';
import { GalaryComponent } from './galary/galary.component';
import { HomeComponent } from './home/home.component';
import { DevelopmentComponent } from './service/development/development.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { EduComponent } from './login/edu/edu.component';
import { PerComponent } from './login/per/per.component';
import { FruitsComponent } from './fruits/fruits.component';
import { LoanCalculatorComponent } from './loan-calculator/loan-calculator.component';
import { S1Component } from './s1/s1.component';
import { S2Component } from './s2/s2.component';
import { SelvaComponent } from './selva/selva.component';
// import { KuamrComponent } from './kuamr/kuamr.component';
import { KumarComponent } from './kumar/kumar.component';
import { BankingComponent } from './banking/banking.component';
import { EmiComponent } from './emi/emi.component';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { MakepaymentComponent } from './makepayment/makepayment.component';
import { PipedemoComponent } from './pipedemo/pipedemo.component';
import { SqrPipe } from './sqr.pipe';
import { CubPipe } from './cub.pipe';
import { LifecyclehooksComponent } from './lifecyclehooks/lifecyclehooks.component';
import { TDFComponent } from './tdf/tdf.component';
import { RDFComponent } from './rdf/rdf.component';
import { PracticeComponent } from './practice/practice.component';
import { ChatBoxComponent } from './chat-box/chat-box.component';


@NgModule({
  declarations: [
    AppComponent,
    ServiceComponent,
    RegisterComponent,
    LoginComponent,
    // SigninComponent,
    DeveolopmentComponent,
    TestingComponent,
    DeploymentComponent,
    GalaryComponent,
    HomeComponent,
    DevelopmentComponent,
    EduComponent,
    PerComponent,
    FruitsComponent,
    LoanCalculatorComponent,
    S1Component,
    S2Component,
    SelvaComponent,
    // KuamrComponent,
    KumarComponent,
    BankingComponent,
    EmiComponent,
    AddaccountComponent,
    MakepaymentComponent,
    PipedemoComponent,
    SqrPipe,
    CubPipe,
    LifecyclehooksComponent,
    TDFComponent,
    RDFComponent,
    PracticeComponent,
    ChatBoxComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
