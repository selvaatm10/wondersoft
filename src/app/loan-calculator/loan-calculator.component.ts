import { Component, OnInit } from '@angular/core';
// import { privateEncrypt } from 'crypto';

@Component({
  selector: 'app-loan-calculator',
  templateUrl: './loan-calculator.component.html',
  styleUrls: ['./loan-calculator.component.css']
})
export class LoanCalculatorComponent implements OnInit {
  

  constructor() { }

  ngOnInit(): void {
  }

  princ="";
  roi="";
  time="";

  value="";

  // EMI Amount = [P x R x (1+R)^N]/[(1+R)^N-1] ,


  total:any = "0";
  emi:any ="0";
  submit(pAmount: any, duration: any, loanType: any) {
      var mytotal: any = 0;
      var rateOfInterest: any = loanType/(12*100);
      mytotal = pAmount*rateOfInterest*Math.pow(1 + rateOfInterest, duration) / (Math.pow(1 + rateOfInterest, duration) - 1);
      this.total = Math.round(mytotal*duration);
      this.emi =  Math.round(mytotal);
  }


  total1: any = "0";
  total2: any = "0";
  calculateValue(iAmount: any, duration: any, interest: any) {
    this.total1 = (iAmount * interest * duration / 100);
    this.total2 = Math.round(iAmount*((1 + interest/100)*duration - 1));
  }

  

//   submit(){

//   var roit:any = +this.value/100/+this.value;
  
//   var b = +this.princ * roit * Math.pow((1 + roit),+this.time)/(Math.pow(1+ roit,+this.time-1))
  
//   // var b = +this.princ * roit
//   var c = 1+roit
//   var d = Math.pow(c,+this.time)
//   var left = b * d
//   var e = +this.time-1
//   var f = Math.pow(c,e)
//   var right = left / f
//   console.log(b)
//   // console.log(c)
//   // console.log(d)
//   // console.log(e)
//   // console.log(f)
//   // console.log(left)
//   // console.log(right)

//  }


  

  

}
