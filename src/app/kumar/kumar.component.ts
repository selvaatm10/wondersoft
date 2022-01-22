import { Component, OnInit } from '@angular/core';
import { ChatservService } from '../chatserv.service';

@Component({
  selector: 'app-kumar',
  templateUrl: './kumar.component.html',
  styleUrls: ['./kumar.component.css']
})
export class KumarComponent implements OnInit {

  constructor(private cs:ChatservService) { }

  ngOnInit(): void {
  }

  msgs:any=[]

  send(mymsg:any){
    this.msgs = this.cs.chat(mymsg)
  }

}
