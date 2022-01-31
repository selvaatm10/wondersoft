import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoservService {

  constructor() { }

  name="";

  db(myname:any){
    console.log("common c omponent")
    this.name = myname
  }

  pass = '';
  bbb(mypass:any){
    this.pass = mypass
  } 

  name2 = '';
  yyy(rname:any){
    this.name2 = rname;
  }


}
