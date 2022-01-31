import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice',
  templateUrl: './practice.component.html',
  styleUrls: ['./practice.component.css']
})
export class PracticeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  print: any;
  submit(name: any) {
    console.log("name :" + name);
    this.print = name
  }

  Myname: string = ""

  names:Array<string> = ["selva","kumar","raj","gold"];

}
