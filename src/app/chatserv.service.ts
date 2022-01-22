import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatservService {

  constructor() { }

  chatmsgs:any=[];

  chat(mychats: any){
    this.chatmsgs.push(mychats)

    return this.chatmsgs;
  }
}
