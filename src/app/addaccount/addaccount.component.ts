import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addaccount',
  templateUrl: './addaccount.component.html',
  styleUrls: ['./addaccount.component.css']
})
export class AddaccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  save(upi:string,name:string,pnum:string,acno:string,ibal:string){
    localStorage.setItem("UpiNum",upi)
    localStorage.setItem("AccName",name)
    localStorage.setItem("AccPhNumber",pnum)
    localStorage.setItem("AccNumber",acno)
    localStorage.setItem("AccInitialBal",ibal)
  }

  payment(upi:string,pnum:string,acno:string){
    if(upi==localStorage.getItem("UpiNum") && pnum==localStorage.getItem("AccPhNumber")){
      
    }
    else{
      alert('Pls Enter the valid Email or Password')
    }
  }

}
