import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements OnInit, OnDestroy {

  constructor() { 
    console.log("Hi i am constructor")
  }
  ngOnDestroy(): void {
      console.log("Destroy method - used for close")
  }

  ngOnInit(): void {
    console.log("database: db connection // open");
    
  }

}
