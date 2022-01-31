import { Component, OnInit } from '@angular/core';
// import { time } from 'console';
// import { DemoservService } from '../demoserv.service';
import { DemoservService } from '../demoserv.service';

@Component({
  selector: 'app-s1',
  templateUrl: './s1.component.html',
  styleUrls: ['./s1.component.css']
})
export class S1Component implements OnInit {

  constructor(private dblogin:DemoservService) { }

  ngOnInit(): void {
  }
 
  // name="";
  xyz(myname:any){
    console.log("Hi My Name is from service  : "+myname)
    // this.name=myname
    this.dblogin.db(myname)
  }

  aaa(mypass:any){
    this.dblogin.bbb(mypass)
  }

  name2:any = '';
  xxx(rname:any){
    this.name2 = this.dblogin.yyy(rname)
  }
  
}
