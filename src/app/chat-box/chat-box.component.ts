import { Component, OnInit } from '@angular/core';
import { ChatservService } from '../chatserv.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  constructor(private cs:ChatservService) { }

  receiveData:any = []

  ngOnInit(): void {
    this.receiveData = this.cs.chatmsgs
    this.receiveData = this.cs.chatmsgs1
  }

  msgs:any=[]

  send(mymsg:any){
    this.msgs = this.cs.chat(mymsg)
  }

  msgs1:any=[]

  send1(mymsg1:any){
    this.msgs1 = this.cs.chat1(mymsg1)
  }

}
