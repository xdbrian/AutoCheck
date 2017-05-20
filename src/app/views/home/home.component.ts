import { Component, OnInit } from '@angular/core';

//services
import { GeneralData } from '../../services/GeneralData.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ GeneralData ]
})
export class HomeComponent implements OnInit {

  constructor(private generalData: GeneralData){

  }

  ngOnInit() {

  }

}
