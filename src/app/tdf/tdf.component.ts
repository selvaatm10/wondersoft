import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TDFComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // onSubmit(data:NgForm){
  //   console.log(data)
  //   // localStorage.setItem("myData",data);
  // }

  name = "Angular";

  onSubmit(form: NgForm) {
    console.log(form);
  }
}
