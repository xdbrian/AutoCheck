import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comments-vehicule',
  templateUrl: './comments-vehicule.component.html',
  styleUrls: ['./comments-vehicule.component.css']
})
export class CommentsVehiculeComponent implements OnInit {
  @Input() comments: Comment[];
  constructor() { }

  ngOnInit() {
  }

}
