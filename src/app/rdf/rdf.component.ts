import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl , Validators } from '@angular/forms';

@Component({
  selector: 'app-rdf',
  templateUrl: './rdf.component.html',
  styleUrls: ['./rdf.component.css']
})
export class RDFComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    email:new FormControl('',[Validators.required,Validators.minLength(6)]),
    pswd:new FormControl('',[Validators.required,Validators.minLength(6)])
  })

  get email(){
    return this.loginForm.controls;
  }
  get pswd(){
    return this.loginForm.controls;
  }

}
