import { Component,OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ViewChild } from '@angular/core'
import { Router } from '@angular/router'
import { Petition } from './services/petition.services'

//Components
import { MessageError } from './component/message-error/message-error.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [ Petition ]
})
export class AppComponent implements OnInit{
  title = 'app works!';

  @ViewChild('messageError') messageError :MessageError
    myData: Array<any>;

  constructor(private petition : Petition,private route:Router){

  }
  ngOnInit() {


    let url='google.com'

    let data = {"request": {"productCode": "PAEPPL"}};
    this.petition.getPost(url,data)
        .map(response => response.json())
        .subscribe(
            data => {
              this.route.navigate(['general-info'])
            },
            err => {
              this.messageError.addAlert("Lo sentimos la placa no existe")
              console.log(err)
            },
            () => console.log(' complete for Server Metrics ')
        )



  }
}
