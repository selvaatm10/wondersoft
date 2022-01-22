import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  name = localStorage.getItem("LoginName")

  login(uname:string,upass:string){
    localStorage.setItem("LoginName",uname)
    localStorage.setItem("LoginPass",upass)
  }
  signin(uname:string,upass:string){
    if(uname==localStorage.getItem("LoginName") && upass==localStorage.getItem("LoginPass")){
      this.router.navigate(['./home']);
    }
    else{
      alert('Pls Enter the valid Email or Password')
    }
  }

  

  myusername:any

  myimage="../../assets/img/watch-1.jpg"

}

