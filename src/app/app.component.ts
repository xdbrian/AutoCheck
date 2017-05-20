import { Component,OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { Petition } from './services/petition.services'
import { GeneralData } from './services/GeneralData.component'

//Components
import { MessageError } from './component/message-error/message-error.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ Petition,GeneralData ]
})
export class AppComponent implements OnInit{
  title = 'app works!';

  @ViewChild('messageError') messageError :MessageError
    myData: Array<any>;

  constructor(private petition : Petition,private route:Router){

  }
  ngOnInit() {




  }
}
