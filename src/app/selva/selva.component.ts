import { Component, OnInit } from '@angular/core';
import { ChatservService } from '../chatserv.service';

@Component({
  selector: 'app-selva',
  templateUrl: './selva.component.html',
  styleUrls: ['./selva.component.css']
})
export class SelvaComponent implements OnInit {

  constructor(private cs:ChatservService) { }

  receiveData:any = []

  ngOnInit(): void {
    this.receiveData = this.cs.chatmsgs1
  }

  msgs:any=[]

  send(mymsg:any){
    this.msgs = this.cs.chat(mymsg)
  }

}

