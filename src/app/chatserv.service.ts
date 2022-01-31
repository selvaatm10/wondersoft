import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatservService {

  constructor() { }

  chatmsgs:any=[];
  chatmsgs1:any=[];

  chat(mychats: any){
    this.chatmsgs.push(mychats)
    return this.chatmsgs;
  }
  
  chat1(mychats1: any){
    this.chatmsgs1.push(mychats1)
    return this.chatmsgs1;
  }
}
