import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  clr:string = "red"

  mycondition=true;
  fruits:Array<string>=["Apple","Banana","Cikku","PineApple"];

  addfruit(fruit:any){
    this.fruits.push(fruit)
  }

  days:Array<string>=["Sunday","Moday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];



  value="";
  // val="";
  // color(value:any){
  //   document.body.style.backgroundColor = value;
  // }
  // font(val:any){
  //   document.body.style.backgroundColor = val;
  // }

  // clrrr:string =""

  // myClr(color:string){
  //   this.clrrr = color;
  //   if(color=""){
  //     this.clrrr = color
  //   }
  // }


}
