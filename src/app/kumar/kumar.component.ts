import { Component, OnInit } from '@angular/core';
import { ChatservService } from '../chatserv.service';

@Component({
  selector: 'app-kumar',
  templateUrl: './kumar.component.html',
  styleUrls: ['./kumar.component.css']
})
export class KumarComponent implements OnInit {

  constructor(private cs:ChatservService) { }

  receiveData:any = [];

  ngOnInit(): void {

    this.receiveData = this.cs.chatmsgs
    
    }

  msgs1:any=[]

  send1(mymsg1:any){
    this.msgs1 = this.cs.chat1(mymsg1)
  }
}
